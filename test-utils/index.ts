export function type(input: any, text: string) {
  input.instance().value = text;
  input.simulate("change");
}
