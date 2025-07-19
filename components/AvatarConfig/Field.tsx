interface FieldProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

export const Field = (props: FieldProps) => {
  return (
    <div className="flex flex-col gap-3 py-3 w-full">
      <label className="text-[#F06250] text-lg font-semibold mb-2">{props.label}</label>
      {props.children}
    </div>
  );
};
