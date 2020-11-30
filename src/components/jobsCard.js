import React from 'react'

export default function jobsCard({name,website,position,interview,notes}) {
    return (
        <div>
            <p>{name}</p>
    <a>{website}</a>
    <p>{position}</p>
    <p>{interview}</p>
    <p>{notes}</p>
    
            {/* name:String,
    website:String,
    position:String,
    interview:{
        type:Boolean,
        default:false
    },
    notes:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created:{
        type:String,
        default:moment((Date.now())).format('hh:mmA MM/DD/YY')
    } */}
        </div>
    )
}
