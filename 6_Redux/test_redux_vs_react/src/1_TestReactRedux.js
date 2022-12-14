
// https://niithanoi.edu.vn/tu-hoc-reactjs.html#iii5-lap-trinh-react-redux

// Action creator
function incrementClick(click) {
    return {
      type: "CLICK_BUTTON",
      click: click
    }
  }
  
  const initialState = {
    click: 0
  };
  
  // Hàm reducer
  function reducer(state = initialState, action) {
    switch(action.type) {
      case "CLICK_BUTTON":
        return { click: state.click + action.click };
      default:
        return state;
    }
  }
  
  // Components
  function MouseClick(props) {
    function handleClick() {
      props.incrementClick(1);
    }
    return <div>
      <p>{props.click}</p>
      <button onClick={handleClick}>CLICK VÀO ĐÂY!</button>
    </div>;
  }
  
  // Trả về sate dưới dạng props
  // cho components truy cập
  function mapStateToProps(state) {
    return {
      click: state.click
    };
  }
  
  // Cung cấp hàm điều phối
  // dưới dạng props
  const mapDispatchToProps = {
    incrementClick
  }
  
  // Tạo store
  const store = createStore(reducer);
  
  // Cho phép component mới (được trả về)
  // kết nối với store
  const Click = connect(mapStateToProps, mapDispatchToProps)(MouseClick);
  
  const el = <Provider store={store}>
            <Click/>
          </Provider>; 
  
function TestReactRedux()
{
  return (
    <>
      <Provider store={store}>
            <Click/>
          </Provider>; 
    </>
  )
}

export default TestReactRedux