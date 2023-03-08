function App() {

  return (
     <div align="center">
      <h3>. . . CALCULATOR . . .</h3>
      <br />
      {/* START TABLE */}
      <table style={{ border: '5px solid black', width: '250px' }}>
        {/* FIRST ROW */}
        <tr style={{ border: '2px solid black', height:'45px'}}>
          <td colSpan={4} align="center" style={{ border: '2px solid black' }}>
            <h5>RESULT</h5>
            </td> {/* Column */}
        </tr>

        {/* SECOND ROW */}
        <tr style={{ border: '2px solid black', height:'45px' } }>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><button type="button" className="btn btn-success"><b>/</b></button></td>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><button type="button" className="btn btn-success"><b>*</b></button></td>
          <td align="center" style={{ border: '2px solid black', width:'30px' }}><button type="button" className="btn btn-success"><b>-</b></button></td>
          <td rowSpan={2} align="center" style={{ border: '2px solid black', width: '30px' }}><button type="button" className="btn btn-success"><h1><b>+</b></h1></button></td>
        </tr>
        
        {/* THIRD ROW */}
        <tr style={{ border: '2px solid black', height:'45px' }}>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><button type="button" className="btn btn-outline-primary"><b>7</b></button></td>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><button type="button" className="btn btn-outline-primary"><b>8</b></button></td>
          <td align="center" style={{ border: '2px solid black' , width:'30px'}}><button type="button" className="btn btn-outline-primary"><b>9</b></button></td>
        </tr>
        
        {/* FOURTH ROW */}
        <tr style={{ border: '2px solid black', height:'45px' }}>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>4</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>5</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>6</b></button></td>
          <td rowSpan={3} align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-info"><h1><b>=</b></h1></button></td>
        </tr>
        
        {/* FIFTH ROW */}
        <tr style={{ border: '2px solid black', height:'45px' }}>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>1</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>2</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-outline-primary"><b>3</b></button></td>
        </tr>
        
        {/* SIXTH ROW */}
        <tr style={{ border: '2px solid black', height:'45px' }}>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-warning"><b>C</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-dark"><b>0</b></button></td>
          <td align="center" style={{ border: '2px solid black' }}><button type="button" className="btn btn-danger"><b>Del</b></button></td>
        </tr>

      </table>
      {/* END TABLE */}
     </div>
  )
}

export default App
