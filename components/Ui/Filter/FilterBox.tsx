import React from 'react'
import Filter from './Filter'

const arr1=[
    {
        t:'Tshit'
    },
    {
        t:'Shit'
    },
    {
        t:'Jeans'
    },
    {
        t:'Pants'
    },
]

const arr2=[
    {
        t:'red'
    },
    {
        t:'white'
    },
    {
        t:'black'
    },
    {
        t:'blue'
    },
]

const arr3=[
    {
        t:'Men'
    },
    {
        t:'women'
    },
    {
        t:'kids'
    },
    {
        t:'teen'
    },
]

const arr4=[
    {
        t:'S'
    },
    {
        t:'M'
    },
    {
        t:'L'
    },
    {
        t:'XL'
    },
    {
        t:'XXL'
    },
]

const FilterBox = () => {
  return (
    <div>
        <Filter nam={'Product Type'} arr={arr1}/>
        <Filter nam={'Color'} arr={arr2}/>
        <Filter nam={'Category'} arr={arr3}/>
        <Filter nam={'Size'} arr={arr4}/>
    </div>
  )
}

export default FilterBox