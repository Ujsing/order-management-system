/**
 * <FormRow>
 *   <Input ... />
 *   <Select ... />
 * </FormRow>
 *
 * <FormRow cols={3}>...</FormRow>
 */
export default function FormRow({ children, cols = 2, gap = '10px', style = {} }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}