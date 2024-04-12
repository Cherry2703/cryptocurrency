import React from "react"

import {BarChart,Bar,ResponsiveContainer,XAxis,YAxis,Legend} from "recharts"



const PopulationGraph=(props)=>{
    const {data}=props
    const DataFormatter = (number) => {
        if (number > 10000) {
          return `${(number / 10000).toString()}k`
        }
        return number.toString()
      }
    
      return (
            <ResponsiveContainer width="90%" height={200}>
            <BarChart
                data={data}
                margin={{
                top: 5,
                }}
            >
                <XAxis
                dataKey="year"
                tick={{
                    stroke: "gray",
                    strokeWidth: 1,
                }}
                />
                <YAxis
                tickFormatter={DataFormatter}
                tick={{
                    stroke: "gray",
                    strokeWidth: 0,
                }}
                />
                <Legend
                wrapperStyle={{
                    padding: 30,
                }}
                />
                <Bar dataKey="population" name={data.nation} fill="#1f77b4" barSize="10%" />
            </BarChart>
            </ResponsiveContainer>
      )
}

export default PopulationGraph