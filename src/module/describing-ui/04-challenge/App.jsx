function LactoseIntolerant() {
  return (
    <h1>
      <span role="img" aria-label="broccoli and strawberry">
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese">
        🥛🧀
      </span>
    </h1>
  );
}

export default function App() {
  const isLactoseTolerant = false;
  return <>{isLactoseTolerant ? <LactoseTolerant /> : <LactoseIntolerant />}</>;
}
