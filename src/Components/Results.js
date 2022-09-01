import React from 'react'
import { Table } from 'antd'
import "../Styles/results.css"
import { PieChart } from 'react-minimal-pie-chart';


export default function Results({toggle, setToggle, resdata, search_word, setSearch_word, selected, setSelected}) {

    console.log("Inside results",resdata[0]);

    var data = []

    if(search_word!=="")
    {
        resdata.map((resdata)=>{
            if(resdata.Place===search_word)
            {
                data.push(resdata);
            }
            else if(resdata.Name===search_word)
            {
                data.push(resdata);
            }
            else if(resdata.State===search_word)
            {
                data.push(resdata);
            }
        })
    }
    else
    {
        resdata.map((resdata)=>{
            data.push(resdata);
        })
    }
    var States = ['Tamilnadu','Andhra','UP']

    const columns = [
        {
            title: "College",
            dataIndex: "Name",
            key: "Name"
        },
        {
            title: "Location",
            dataIndex: "Place",
            key: "Place"
        },
        {
            title: "Year founded",
            dataIndex: "Year",
            key: "Year"
        },
        {
            title: "State",
            dataIndex: "State",
            key: "State"
        },
        {
            title: "Number of Students",
            dataIndex: "Numbers",
            key: "Numbers"
        }
    ]

    var State_perc = [0,0,0,0]
    var colors = ['#E38627','#C13C37','#6A2135',"#D65000"]

    resdata.map((resdata)=>{
        if(resdata.State==="Tamilnadu")
        {
            State_perc[0]++;
        }
        else if(resdata.State==="Andhra")
        {
            State_perc[1]++;
        }
        else if(resdata.State==="UP")
        {
            State_perc[2]++;
        }
        else if(resdata.State==="Madhya Pradesh")
        {
            State_perc[3]++;
        }
    })

    var datas = []

    for(var i=0;i<4;i++)
    {
        datas.push({title: States[i], value: State_perc[i], color: colors[i]})
    }

    console.log(State_perc);

    return (
        toggle === "College" ? 
        <>
        <div className='table-cont'>
            <Table columns={columns} dataSource={data} />
        </div>
        </>
        :
        <div style={{"textAlign":"center"}}>
            <p style={{"fontSize":30,"fontWeight":500}}>State-wise Chart</p>
            <PieChart data={[
                {title: "Tamilnadu",value:State_perc[0],color:'#E38627'},
                {title: "Andhra",value:State_perc[1],color:'#C13C37'},
                {title: "UP",value:State_perc[2],color:'#6A2135'},
                {title: "Madhya Pradesh",value:State_perc[3],color:'#D65000'}
            ]}
            radius={PieChart.defaultProps.radius - 6}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            style={{"width":"30vw"}}
            onClick={(event, index) => {
                console.log('CLICK', { event, index });
                setToggle("College");
                setSearch_word(States[index]);
            }}
        />
        <div>
            <p style={{"fontSize":30,"fontWeight":500}}>Legend</p>            
            <div className='legendval'>
                <div style={{"backgroundColor":'#E38627',"height":"4vh","width":"4vw"}}>
                </div>
                <pre><p>        </p></pre>
                <p>Tamilnadu</p>
            </div>
            <div className='legendval'>
                <div style={{"backgroundColor":'#C13C37',"height":"4vh","width":"4vw"}}>
                </div>
                <pre><p>          </p></pre>
                <p>Andhra</p>
            </div>
            <div className='legendval'>
                <div style={{"backgroundColor":'#6A2135',"height":"4vh","width":"4vw"}}>
                </div>
                <pre><p>             </p></pre>
                <p>UP</p>
            </div>
        </div>
        </div>
    )

}
