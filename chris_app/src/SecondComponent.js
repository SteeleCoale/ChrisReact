export const SecondComponent = (props) => {

  return (
    <div
    className='secondComponent'
    >
      This is the second component and it uses a value passed into the component at run time to display the following number: {props.value}
      <br />
      {/* {props.children} */}
      </div>
  )
}