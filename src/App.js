
import './App.scss';

const App = () => {

  const asciiExpressions = [ "ʘ‿ʘ", "ಠ_ಠ", "(｡◕‿◕｡)", "（　ﾟДﾟ）", "(╬ ಠ益ಠ)", "ಠ‿ಠ", "( ͡° ͜ʖ ͡°)", "ಥ_ಥ", "ಥ﹏ಥ", "⊙﹏⊙", "°‿‿°", "(´･_･`)", "ఠ_ఠ", "(⊙_◎)", "ミ●﹏☉ミ", "(ಥ⌣ಥ)", "(๑•́ ₃ •̀๑)", "◔_◔", "♥‿♥", "( ˘ ³˘)♥", "( ˇ෴ˇ )", "(҂◡_◡)", "⥀.⥀", "(⩾﹏⩽)", "( ఠ ͟ʖ ఠ )", "( ͡ಠ ʖ̯ ͡ಠ )", "( ಠ ʖ̯ ಠ )", "♨_♨", "(._.)", "눈_눈", "(◠﹏◠)", "◖ᵔᴥᵔ◗ ♪ ♫", "{•̃_•̃}", "(ᵔᴥᵔ)", "(Ծ‸ Ծ)"
  ]

  const asciiCharacters = [

  ]

  return(
    <div> 
      <div className='container-ascii'>
          {asciiExpressions.map( curr => <p className="ascii-size">{curr}</p>)}    
      </div>
    </div>
  )
}

export default App;