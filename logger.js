// export default function Logger(reducer) {
//     return (state,action,args) => {
//         var nextstate = reducer(state,action,args);
//         console.group('action: ',action);
//         console.log('prev state: ',state);
//         console.log('args: ',args);
//         console.log('next state: ',nextstate); 
//         console.groupEnd();
//         return nextstate;
//     }
// }