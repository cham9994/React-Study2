import Input from './UI/Login/input'

function App() {
  return (
    <div className="App">
      <div className="flex-col flex items-center justify-center py-12 px-4">
        <div>
          <h2>회원가입</h2>
        </div>
        <form className="flex flex-col gap-4">
          <Input
            id="name"
            label="이름"
            type="text"
            placeholder="이름을 입력하세요!"
            error="이름은 두 글자 이상 입력해주세요."
            // validators={}
          />
          <Input
            id="email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력하세요!"
            error="이메일 형식이 맞지 않습니다."
          />
          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요!"
            error="비밀번호는 8자 이상 입력해주세요!"
          />
        </form>
      </div>
    </div>
  )
}

export default App
