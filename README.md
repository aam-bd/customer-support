#What is JSX, and why is it used?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows to write HTML-like code in React components. For example:
const element = <h1>Hello, World!</h1>;

#What is the difference between State and Props?
Props are read-only and passed from parent to child components.
State is mutable and manageable within the component.

Example:
// Props (passed from parent)
<Child name="John" />
// State (managed inside component)
const [count, setCount] = useState(0);

#What is the useState hook, and how does it work?
useState is a React hook that adds state to functional components. It returns an array with the current state value and a function to update it.

Example:
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>
  Clicked: {count}
</button>

#How can you share state between components in React?

State can be shared by lifting the state up to a common parent component.


Example:

function Parent() {
  const [data, setData] = useState('');
  return (
    <>
      <ChildA data={data} />
      <ChildB setData={setData} />
    </>
  );
}

#How is event handling done in React?

Event handling in React uses camelCase syntax and passes a function as the event handler, not a string.

Example:
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}