import React, {useReducer} from 'react'
import {ContextApp, initialState, testReducer} from "./reducer.js";
import StatusBar from './components/stats/statusBar/statusBar';
import Button from './components/controls/button/button';

export const App = () => {
    // Инициализируем reducer и получаем state + dispatch для записи
    const [state, dispatch] = useReducer(testReducer, initialState);
    //let tickHLH = 0;
    // if (state.chlen > 0) {
    //   //tickHLH = 10;
    //  let timerId = setInterval(() => 14, 2000);
    // }
    return (
      
        // Для того, чтобы мы могли использовать reducer в компонентах
        // Воспользуемся ContextApp и передадим (dispatch и state)
        // в компоненты ниже по иерархии
        <ContextApp.Provider value={{dispatch, state}}>
          {console.log(state)}
            <StatusBar statusData={state} />
            <Button />
        </ContextApp.Provider>
    )
};



// import './App.scss';
// // import Controls from './components/controls/controls';
// // import Stats from './components/stats/stats';
// import React, {useReducer} from 'react'
// import {ContextApp, initialState, testReducer} from "./reducer.js";
// import {IndexComponent} from "./IndexComponent.js"

// export const App = () => {
//     // Инициализируем reducer и получаем state + dispatch для записи
//     const [state, dispatch] = useReducer(testReducer, initialState);

//     return (
//         // Для того, чтобы мы могли использовать reducer в компонентах
//         // Воспользуемся ContextApp и передадим (dispatch и state)
//         // в компоненты ниже по иерархии
//         <ContextApp.Provider value={{dispatch, state}}>
//             <IndexComponent/>
//         </ContextApp.Provider>
//     )
// };

// // function App() {
// //   return (
// //     <div className="wrap">
// //       <h1 className="title">MiniGame</h1>
// //       <div className="App">
// //         <Stats />
// //         <Controls />
// //       </div>
// //     </div>
// //   );
// // }

export default App;
