export default function(state=[],action){
  console.log("Action Received ");
  switch(action.type){
    case "AppState":
        return action.payload;
  }
  return "Initial Load";
}
