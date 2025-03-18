interface ContainerProps {
  children: React.ReactNode;
  className?: string
}

const Container: React.FC<ContainerProps> = ({
  children,
  className
}) => {
  return (
    <div
      className={`bg-[#F5F1FF] max-h-screen h-screen overflow-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container
