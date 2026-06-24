import {render,screen} from '@testing-library/react'
import TestComponent from './TestComponent'
import userEvent from '@testing-library/user-event'

test("test heading text", () => {
    render(<TestComponent />)
    expect(screen.getByText("Student Result Calculator")).toBeInTheDocument()
})

test("test input field", () => {
    render(<TestComponent />)
    expect(screen.getByPlaceholderText("Enter marks...")).toBeInTheDocument()
})
test("Input change test", async () => {
    render(<TestComponent />)
    await userEvent.type(
        screen.getByPlaceholderText("Enter marks..."), "45")
    expect(screen.getByDisplayValue("45")).toBeInTheDocument()
})
test("Input change test pass", async () => {
    render(<TestComponent />)
    await userEvent.type(
        screen.getByPlaceholderText("Enter marks..."), "70")
    expect(screen.getByDisplayValue("70")).toBeInTheDocument()
})
test("test button", () => {
    render(<TestComponent />)
    expect(screen.getByRole('button', { name: 'Get Result' })).toBeInTheDocument()

})
test("Test result calculation - Fail", async () => {
    render(<TestComponent />)
    await userEvent.click(
        screen.getByRole('button', { name: 'Get Result' })
    )
    expect(screen.getByText("Result: Fail")).toBeInTheDocument()

})
test("Test result calculation - Pass", async () => {
    render(<TestComponent />)
    await userEvent.type(
        screen.getByPlaceholderText("Enter marks..."),
        "70"
    )

    await userEvent.click(
        screen.getByRole('button', { name: 'Get Result' })
    )
    expect(screen.getByText("Result: Pass")).toBeInTheDocument()

})