import Tabs from "./tabs";
import './tabs.css'

function RandomComponent(){
    return <div>This is content for tab 3</div>
}


export default function TabTest() {

    const tabs=[
        {
            label: 'Tab 1',
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent/>
        }
    ]

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}