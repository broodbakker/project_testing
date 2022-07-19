/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Counter from "../components/counter";


const setup = (defaultValue) => {
  const utils = render(<Counter defaultValue={defaultValue}/>)
  const input = screen.getByTestId('inputValue')
  const inputMin = screen.getByRole('button', {name: /-/i})
  const inputPlus = screen.getByRole('button', {name:"+"})
  return {
    input,inputMin,inputPlus,
    ...utils,
  }
}

describe("counter",() => {
  const user = userEvent.setup()

  describe("renders counter",() => {

      it("render input value",() => {
        const {  input} = setup(0)
        expect(input).toBeInTheDocument()
      })

      it("render inputMin button",() => {
        const {  inputMin} = setup(0)
        expect(inputMin).toBeInTheDocument()
      })

      it("render inputPlus button",() => {
        const {  inputPlus} = setup(0)
        expect(inputPlus).toBeInTheDocument()
      })

      it("input value should be 0",() => {
        const {  input} = setup(0)
        expect(input).toHaveValue("0");
      })
  })

  describe("when + has been clicked",() => {

    it("if count = 0 and + is clicked then count = 1", async () => {
      const {  input,inputPlus} = setup(0)

      await user.click(inputPlus)
      expect(input.value).toBe('1')
    })
  })

  describe("when - has been clicked and defaultvalue 5",() => {
    it("value = 4", async () => {
      const {  input,inputMin} = setup(5)

      await user.click(inputMin)
      expect(input.value).toBe('4')
    })
  })

  describe("when - has been clicked and defaultvalue 0",() => {

    it("render counter: 0", async () => {
      const {  input,inputMin} = setup(0)

      await user.click(inputMin)
      expect(input.value).toBe('0')
  })
  })
    describe("when typing input value ",() => {

    it("type 25 and value 25", async () => {
      const {  input} = setup(0)

      await user.type(input, '{selectall}{backspace}25');
      expect(input.value).toBe('25')
    })

    it("type backspace and value 0", async () => {
      const {  input} = setup(0)

      await user.type(input, '{selectall}{backspace}');
      expect(input.value).toBe('0')
    })

    it("type the letter c and nothing happens", async () => {
      const {  input} = setup(0)

      await user.type(input, '{selectall}e');
      expect(input.value).toBe('0')
    })
  })
})