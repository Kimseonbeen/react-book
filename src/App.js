/* eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//실제로 렌더링 되는곳
function App() {
  // 이 함수는 실행하게 되면 [a,b] 두개의 arr 생성되고
  // 첫번째는 useState 인자값 
  // 두번째는 인자값을 수정할수 있는 arr
  // ES6 신문법으로 var [a,b] = [10, 100] 가능
  // state : 1. 변수 대신 쓰는 데이터 공간
  //         2. useState()를 이용해 만들어야함
  //         3. 문자, 숫자, arry, object 다 저장가능
  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState('남자 코트 추천2');
  // { 글제목3[0] } 가능
  let [글제목3, 글제목변경3] = useState(['남자 코트 추천', '강남 우동 맛집', '역삼 족발 맛집', '노량진 곱창 맛집']);
  //let [글제목4, 글제목변경4] = useState(['여자 코트 추천', '강남 우동 맛집', '역삼 족발 맛집','노량진 곱창 맛집']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');  // 초기값으로 빈 state 선언

  //따봉변경(10); => 대체할 데이터
  // ** 중요 **
  // state에 데이터 저장해 놓는 이유 : 
  // 변수는 값이 변경되면 자동 재렌더링이 안되어 새로고침 되는 반면에,
  // state는 변경되면 HTML이 자동으로 재렌더링 해준다.

  var 어레이 = [2, 3, 4];

  var 뉴어레이 = 어레이.map(function (a) {    // map : array 내의 모든 데이터에 똑같은 작업을 시켜주고싶을때 .map()
    return a * 2                            // .map()은 유사 반복문
  });

  //for 반복문을 쓰고 싶다면?
  // 보통 함수안에서 사용함
  // array에 HTML 추가하는 방식
  // 그리고 array를 return으로 뱉어냄
  function 반복된UI() {
    
    var 어레이 = [];

    for(var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이
  }
  


  //데이터 바인딩
  let posts = '강남 고기 맛집222222';
  let style = { color: 'orangered', fontSize: '30px' };



  function 제목바꾸기() {
    console.log("제목바꾸기");
    var newArray = [...글제목3]; // deep copy 깊은 복사 방법 / 앏은 복사시 객체를 공유하게 되므로
    newArray.sort();
    console.log("newArray : ", newArray);
    //newArray[0] = '여자코트 추천';
    글제목변경3(newArray);

  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 스타일 추가시 오브젝트 형태로 넣어야됌 */}
        {/* font-size 처럼 하이푼 사용이 안됌 
        자바스크립트 예약어 - 는 뺄셈이기 때문에 카멜케이스 사용 */}
        <div style={style}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      {/* <div className="list">
        <h3> {글제목3[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목3[1]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목3[2]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => { modal변경(!modal) }}> {글제목3[3]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}



      {/* 리엑트에서 반복문 돌리는법 */}
      {/* { 반복된UI() }   */}

      {/* 반복문 쓰는법 {반복할데이터.map() => {return <HTML></HTML>}} */}
      {/* map의 두번쨰 파리미터 i는 반복될때마다 +1 증가한다 */}
      {
        글제목3.map(function (글, i) {
          return (
            <div className="list" key={ i }>
            <h3 onClick={ () => { 누른제목변경(i)} } > { 글 } <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉} </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          )
        })
      }
      
      {/* 글 발행기능 만들기
      1. 사용자가 입력한 글 state로 저장하기
      2. 버튼누르면 입력한 글 state를 글제목 state에 추가 */}
      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) }}/>
        <button onClick={ () => { 
          // unshift = array 맨앞에 자료 추가하는 문법
          var arrayCopy = [...글제목3]; 
          arrayCopy.unshift(입력값);
          글제목변경3( arrayCopy );
         }}>저장</button>
      </div>
     
      {/* 이벤트가 일어난 곳의 input에 입력된 값 가져오는 법 : e.target.value */}
      {/* <input onChange={ (e) => {  입력값변경(e.target.value)  } } />  */}

      {/* <button onClick={ () => { 누른제목변경(0)} }>버튼1</button>
      <button onClick={ () => { 누른제목변경(1) } }>버튼2</button>
      <button onClick={ () => { 누른제목변경(2) } }>버튼3</button>
      <button onClick={ () => { 누른제목변경(3) } }>버튼4</button> */}
      <button onClick={() => { modal변경(!modal) }}>열고닫기</button>

      <Profile></Profile>

      {/* 숨긴뒤 보여줄때 style로 display none 사용하는것이 아닌 if문은 사용할수 없고 삼항연산자로 사용할수 있다 */}
      {
        modal == true
                      // 1.
          ? <Modal 글제목={ 글제목3 } 누른제목={누른제목} ></Modal> // 자식컴포턴트 // app : 부모컴포넌트
          : null

          // !! props로 자식에게 state 전해주는 법
          // 1. <자식컴포턴트 작명={state명} />
          // 2. 자식컴포넌트에서 props 파라미터 입력 후 사용
      }

      {/* <img src={ logo }/> */}
    </div>
  );
}
              // 2.
function Modal(props) {          //Component 유의사항 1. 이름은 대문자로 시작 2. return()안에 있는건 태그하나로 묶어야함 3. Component 만들어두면 관리가 편해짐
  return (                  //return() 내부를 묶을 때 의미없는 <div>쓰기 싫으면 <> </> 사용
    <>
      <div className="modal">
        <h2> {props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

// 어떤걸 Component로 만드는게 좋을까?
// 1. 반복 출현하는 HTML 덩어리들
// 2. 자주 변경되는 HTML UI들
// 3. 다른 페이지 만들 때도 컴포넌트로 만듦

// Component 많이 만들면 단점
// 1. state 쓸 떄 복잡해짐
// 2. 상위 Component에서 만든 state 쓰려면 props 문법 사용해서 데이터를 전달해줘야한다.


// Component 만드는 기본 문법
// 예전 리액트 문법
class Profile extends React.Component {
  constructor() {   // class의 변수 / 초기값 저장할 떄 사용
    super();
    this.state = { name : 'Kim', age: 30 }   // state는 constructor 안에 작성
  }

  changeName = () => {              // 에로우 평션으로 작성시 .bind(this) 안 써도됌
    this.setState({ name : 'Park' })
  }
  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        {/* state 꺼내쓰려면 this.state.state명 작성 */}
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
        {/* <button onClick={ this.changeName.bind(this) }>버튼</button> */}
      </div>
    )
  }

}

export default App;
