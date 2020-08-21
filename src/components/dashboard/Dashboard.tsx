import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "../Routes";

import Home from "./home/Home";
// import LoremIpsum from './LoremIpsum';

const Dashboard: React.FunctionComponent = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row min-vh-100">
//         <div className="col-12">
//           <div className="d-flex flex-column h-100">
//             <div className="row flex-grow-1">
//               <aside
//                 className="col-md-3 float-left col-1 pl-0 pr-0 show"
//                 id="sidebar"
//               >
//                 {/* <Menu /> */}
//               </aside>
//               <main className="col-md-9 float-left col main mt-3">
//                 <Switch>
//                   <Route exact path={Routes.root} component={() => <Home />} />
//                   {/* <Route path={Routes.tasks} component={TaskListContainer} />
//                                     <Route path={Routes.profiles} component={ProfilesContainer} />
//                                     <Route
//                                         path={Routes.proxies}
//                                         component={() => <ProxyListsContainer />}
//                                     />
//                                     <Route path={Routes.settings} component={() => <Settings />} /> */}
//                 </Switch>
//               </main>
//             </div>
//             {/* <Footer className="row align-items-center flex-nowrap" /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

  return (
    <Switch>
      <Route exact path={Routes.root} component={() => <Home />} />
    </Switch>
  );
};

export default Dashboard;
