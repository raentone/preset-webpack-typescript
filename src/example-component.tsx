import React from "react";

type ExampleComponentProps = {
  dict: Record<string, string>
}

const Component: React.FC<ExampleComponentProps> = (props: ExampleComponentProps) => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default Component;