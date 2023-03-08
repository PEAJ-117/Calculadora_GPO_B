function App() {

  return (
     <div align="center">
      <h3>. . . CALCULATOR . . .</h3>
      <br />

      {/* START TABLE */}
      <table style={{ border: '5px solid black', width: '450px' }}>
        {/* FIRST ROW */}
        <tr style={{ border: '2px solid black', height:'60px'}}>
          <td colSpan={4} align="center" style={{ border: '2px solid black' }}><h5>RESULT</h5></td> {/* Column */}
        </tr>
        {/* SECOND ROW */}
        <tr style={{ border: '2px solid black', height:'60px' } }>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><h4>/</h4></td>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><h4>*</h4></td>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><h4>__</h4></td>
          <td rowSpan={2} align="center" style={{ border: '2px solid black', width:'30px' }}><h1>+</h1></td>
        </tr>
        {/* THIRD ROW */}
        <tr style={{ border: '2px solid black', height:'60px' }}>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><b>7</b></td>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><b>8</b></td>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><b>9</b></td>
        </tr>
        {/* FOURTH ROW */}
        <tr style={{ border: '2px solid black', height:'60px' }}>
          <td align="center" style={{ border: '2px solid black' }}><b>4</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>5</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>6</b></td>
          <td rowSpan={3} align="center" style={{ border: '2px solid black' }}><h1>=</h1></td>
        </tr>
        {/* FIFTH ROW */}
        <tr style={{ border: '2px solid black', height:'60px' }}>
          <td align="center" style={{ border: '2px solid black' }}><b>1</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>2</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>3</b></td>
        </tr>
        {/* SIXTH ROW */}
        <tr style={{ border: '2px solid black', height:'60px' }}>
          <td align="center" style={{ border: '2px solid black' }}><b>C</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>0</b></td>
          <td align="center" style={{ border: '2px solid black' }}><b>Del</b></td>
        </tr>
      </table> {/* END TABLE */}
     </div>
  )
}

export default App
