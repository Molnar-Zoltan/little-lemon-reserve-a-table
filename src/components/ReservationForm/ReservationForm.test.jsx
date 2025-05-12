import { render, screen, fireEvent, waitFor  } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ReservationForm from './ReservationForm';

describe('Render tests', () => {
  it('renders exactly 2 Date labels', () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const dateLabels = screen.getAllByText(/date:/i);
    expect(dateLabels).toHaveLength(2);
  });

  it('renders exactly 2 Time labels', () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const timeLabels = screen.getAllByText(/time:/i);
    expect(timeLabels).toHaveLength(2);
  });


  it('renders the Guests label', () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const guestsLabel = screen.getByText(/guests:/i);
    expect(guestsLabel).toBeInTheDocument();
  });

  it('renders the Occasion label', () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const occasionLabel = screen.getByText(/occasion:/i);
    expect(occasionLabel).toBeInTheDocument();
  });

  it('renders the reservation button', () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const reservationButton = screen.getByText(/make your reservation/i);
    expect(reservationButton).toBeInTheDocument();
  });

});


describe('Input validation tests', () => {
  
  // ------------- Time ------------- //

  it('shows an error message when time input is empty', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getAllByLabelText(/time:/i)[0];
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);  // Triggers validation on blur
    const errorMessage = await screen.findAllByText("Please select a time."); // 2 Error Messages will trigger (1 in desktop and 1 mobile view)
    expect(errorMessage).toHaveLength(2);
  });

  it('hides the validation error message when the time input has value', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/time:/i);

    // Trigger invalid value
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    // Wait for the error to appear
    await screen.findAllByText("Please select a time.");

    // Now fix the value
    fireEvent.change(input, { target: { value: "18:00" } });
    fireEvent.blur(input);

    // Wait for validation to remove the error
    await waitFor(() => {
      expect(screen.queryByText("Please select a time.")).not.toBeInTheDocument();
    });
  });


  // ------------- Date ------------- //

  it('shows a validation error message when date input is empty', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getAllByLabelText(/date:/i)[0];
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input); 
    const errorMessage = await screen.findAllByText("You have to pick a date."); 
    expect(errorMessage).toHaveLength(2);
  });


  it('it shows a validation error message when selecting a past date', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getAllByLabelText(/date:/i)[0];
    fireEvent.change(input, { target: { value: "2025-05-11" } });
    fireEvent.blur(input); 
    const errorMessage = await screen.findAllByText("Please select a future date."); 
    expect(errorMessage).toHaveLength(2);
  });


  it('hides the validation error message when the date input has correct value', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/date:/i);

    fireEvent.change(input, { target: { value: "2025-05-11" } });
    fireEvent.blur(input);

    await screen.findAllByText("Please select a future date.");

    fireEvent.change(input, { target: { value: "2225-05-11" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText("Please select a future date.")).not.toBeInTheDocument();
    });
  });



  // ------------- Guests ------------- //

  it('shows a validation error message when the value of the guests input is lower than 1', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/guests:/i);
    fireEvent.change(input, { target: { value: 0 } });
    fireEvent.blur(input);  
    const errorMessage = await screen.findByText("You need to add at least 1 guest.");
    expect(errorMessage).toBeInTheDocument();
  });



  it('shows a validation error message when the value of the guests input is higher than 10', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/guests:/i);
    fireEvent.change(input, { target: { value: 11 } });
    fireEvent.blur(input); 
    const errorMessage = await screen.findByText("You can only add 10 guests.");
    expect(errorMessage).toBeInTheDocument();
  });


  it('hides the validation error message when the guests input has correct value', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/guests:/i);

    fireEvent.change(input, { target: { value: -1 } });
    fireEvent.blur(input);

    await screen.findByText("You need to add at least 1 guest.");

    fireEvent.change(input, { target: { value:  1 } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText("You need to add at least 1 guest.")).not.toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: 11 } });
    fireEvent.blur(input);

    await screen.findByText("You can only add 10 guests.");

    fireEvent.change(input, { target: { value:  10 } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText("You can only add 10 guests.")).not.toBeInTheDocument();
    });
  });

  // ------------- Occasion ------------- //

  it('shows a validation error message when the occasion input is empty', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/occasion:/i);
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);  
    const errorMessage = await screen.findByText("Please select an occasion.");
    expect(errorMessage).toBeInTheDocument();
  });

  it('hides the validation error message when the occasion input has value', async () => {
    render(
      <MemoryRouter>
          <ReservationForm />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/occasion:/i);

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await screen.findByText("Please select an occasion.");

    fireEvent.change(input, { target: { value: "Birthday" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText("Please select an occasion.")).not.toBeInTheDocument();
    });
  });
});


// ------------- Reservation button ------------- //

describe('Reservation button test', () => {
  it('navigates to the confirmation page on successful reservation', async () => {
    render(
      <MemoryRouter initialEntries={["/reservations"]}>
        <Routes>
          <Route path="/reservations" element={<ReservationForm />} />
          <Route
            path="/confirmed-booking"
            element={<h1>Thank you for your reservation!</h1>}
          />
        </Routes>
      </MemoryRouter>
    );

    let input = screen.getByLabelText(/date:/i);
    fireEvent.change(input, { target: { value: "2250-05-12" } });

    input = screen.getByLabelText(/time:/i);
    fireEvent.change(input, { target: { value: "18:00" } });

    input = screen.getByLabelText(/guests:/i);
    fireEvent.change(input, { target: { value: 1 } });

    input = screen.getByLabelText(/occasion:/i);
    fireEvent.change(input, { target: { value: "Birthday" } });

    const button = screen.getByText(/make your reservation/i);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByText(/thank you for your reservation!/i)).toBeInTheDocument();
    });
    
  });
});