
// Các bước viết code khi làm việc với Redux
// 1. Từ giao diện khai báo thiết kế các State ntn => initState -> Bước khó nhất và quan trọng nhất.
// 2. Các thao tác nào trên UI => Tạo các action constants
// 3. Tạo actions bằng action creators
// 4. Tạo hàm reducer xử lí dữ liệu với actions để tạo dữ liệu mới

// 5. Sử dụng redux bằng cách : Tạo Store và sử dụng dispatch để thay đổi dữ liệu 


import {createStore} from "redux"

const ReduxCoderX = () => {

    // B1: khai báo các state 
    const initState = {
        speed: 0,
        lastSpeed: 1,
    }

    // B2: Tạo constants
    const CHANGE_SPEED = 'CHANGE_SPEED'
    const TURN_OFF = 'TURN_OFF'


    // B3 Tạo action
    // Tạo Action có 2 cách 
    // Tạo bằng mảng object : ít dùng(bị vấn đề về  phải viết nhiều actions với mỗi payload khác nhau)
    // Tạo bằng action creators: truyền payload vô để một action có nhiều data khác nhau.
    function changeSpeed(payload)
    {
        return {
            type: CHANGE_SPEED,
            payload
        }
    }
    function turnoff()
    {
        return {
            type: TURN_OFF
        }
    }


    // B4 tạo hàm reducer
    const reducer = (state=initState, actions) => {

        console.log("state", state)
        console.log("actions", actions)
        let newState
        switch(actions.type) {
            case CHANGE_SPEED:
                // lấy giá trị job người dùng nhập vào và set cho state job
                newState = {
                    ...state,
                    speed: actions.payload
                }
                break
            case TURN_OFF:
                // thêm job hiện tại vào mảng jobs để render lại dữ liệu mới
                newState = {
                    ...state,
                    speed: 0,
                    lastSpeed: state.speed
                }
                break
            default: 
                // throw new Error("Invalid action: " + actions)
                break
        }
        return newState
    }

    // B5
    // Tạo store
    const store = createStore(reducer)

    // get State 
    console.log(store.getState())

    // change speed
    store.dispatch(changeSpeed(10))
    console.log(store.getState())

    store.dispatch(turnoff())
    console.log(store.getState())


    

}
export default  ReduxCoderX