import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'


describe('TaskManagerPage', () => {

  test('should render the TaskManagerPage component without crashing', () => {
    render(<App />)
    const txtElement = screen.getByText(/My tasks/i)
    expect(txtElement).toBeInTheDocument()
  })

  test('should successfully add a new task to the task list', async () => {

    const text = "New Task";
    render(<App />)

    const input = screen.getByPlaceholderText("Try typing 'Buy milk'")

    await userEvent.type(input, `${text}{enter}`)

    const output = await screen.findAllByText((content) => content.includes(text))

    expect(output[0]).toBeInTheDocument()
  })

  test('should allow the user to edit an existing task and save changes', async () => {
    render(<App />);

    const targetTask = await screen.findByTestId('edit-icon-New Task')

    await userEvent.click(targetTask)

    const inputElement = screen.getByDisplayValue('New Task')

    await userEvent.type(inputElement, '-new')

    const updatedTask = await screen.findByTestId('edit-icon-New Task')

    await userEvent.click(updatedTask)

    const output = await screen.findAllByText((content) => content.includes('New Task-new'))

    await waitFor(() => expect(output[0]).toBeInTheDocument())


  })


  test('should toggle the task status between done and undone', async () => {
    render(<App />);

    const task = await screen.findAllByText('New Task-new')

    await userEvent.click(task[0])

    await waitFor(() => expect(task[0]).toHaveClass('line-through'))

  })

  test('should allow the user to delete a task from the list', async () => {
    render(<App />);

    const targetTask = await screen.findByTestId('delete-icon-New Task-new')

    await userEvent.click(targetTask)

    await waitFor(() => expect(targetTask).not.toBeInTheDocument())

  })

})