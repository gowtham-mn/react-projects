import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentstorender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTictacToeBoard',
            component: <TicTacToe/>
        },
        {
            key: 'showrandomColorgenerator',
            component: <RandomColor/>
        },
        {
            key: 'showAccordian',
            component: <Accordian/>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]

    function showEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) return <h1>Loading data !  Please wait</h1>

  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentstorender.map(componentItem => showEnabledFlags(componentItem.key) ? componentItem.component : null)
      }
    </div>
  );
}
