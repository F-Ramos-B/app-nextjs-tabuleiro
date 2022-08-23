export default function Bloco(props) {
  return (
    <div style={{
      height: '100px',
      width: '100px',
      backgroundColor: props.isEven ? 'darkgray' : 'lightgray',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '10px'
    }}>
      {props.index}
    </div>
  );
}