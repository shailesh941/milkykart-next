'use client'

import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Chip, FormControlLabel, Slider, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { Favorite, FavoriteBorder} from "@mui/icons-material";
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

const checkBoxStyle:any = {
    width:'100%',
    fontSize:'14px'
}
function valuetext(value: number) {
  return `$ ${value}`;
}
const MAX = 10000;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];
const categories = [
  { label: 'Shoes', value: '1', count: 12 },
  { label: 'Watches', value: '2', count: 8 },
  { label: 'Clothing', value: '3', count: 20 },
  { label: 'Shoes', value: '4', count: 12 },
  { label: 'Watches', value: '5', count: 8 },
  { label: 'Clothing', value: '25', count: 20 },
  { label: 'Shoes', value: '6', count: 12 },
  { label: 'Watches', value: '7', count: 8 },
  { label: 'Clothing', value: '8', count: 20 },
  { label: 'Shoes', value: '28', count: 12 },
  { label: 'Watches', value: '9', count: 8 },
  { label: 'Clothing', value: '10', count: 20 },
  { label: 'Clothing', value: '11', count: 20 },
  { label: 'Clothing', value: '12', count: 20 },
  { label: 'Clothing', value: '13', count: 20 },
  { label: 'Clothing', value: '14', count: 20 },
  { label: 'Clothing', value: '15', count: 20 },
  { label: 'Clothing', value: '16', count: 20 },
  { label: 'Clothing', value: '17', count: 20 },
  { label: 'Clothing', value: '18', count: 20 },
  { label: 'Clothing', value: '19', count: 20 },
  { label: 'Clothing', value: '20', count: 20 },
]
const discount = [
  { label: 'upto 5%', value: '1', count: 12 },
  { label: '5% - 10%', value: '2', count: 8 },
  { label: '10% - 15%', value: '3', count: 20 },
  { label: '15% - 25%', value: '4', count: 20 },
  { label: 'More than 25%', value: '5', count: 20 }
]
const review = [
  { label: '5 Star', value: '5', count: 12 },
  { label: '4 Star', value: '4', count: 8 },
  { label: '3 Star', value: '3', count: 20 },
  { label: '2 Star', value: '2', count: 20 },
  { label: '1 Star', value: '1', count: 20 }
]
const color = [
    { label: 'color1', value: '1', color:'#FFF085'},
    { label: 'color2', value: '2', color:'#B9F8CF'},
    { label: 'color3', value: '3', color:'#53EAFD'},
    { label: 'color4', value: '4', color:'#A684FF'},
    { label: 'color5', value: '5', color:'#FB64B6'},
    { label: 'color6', value: '6', color:'#FF6467'},
    { label: 'color7', value: '7', color:'#FF2056'},
    { label: 'color8', value: '8', color:'#A2F4FD'},
    { label: 'color9', value: '9', color:'#ED6AFF'},
    { label: 'color10', value: '10', color:'#A813B7'},
    { label: 'color11', value: '11', color:'#2B7FFF'},
]


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export function ProductsFilter(){
    const [selectedCheckBox, setSelectedCheckBox] = useState<string[]>([]);
    const [selectedDiscount, setSelectedDiscount] = useState<string[]>([]);
    const [selectedReview, setSelectedReview] = useState<string[]>([]);
    const [slideValue, setSlideValue] = useState<number[]>([1500, 6000]);
    const [selectedColor, setSelectedColor] = useState<string[]>([]);
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const selectCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        console.log(value, checked)
        setSelectedCheckBox((prev) =>
            checked ? [...prev, value]  : prev.filter((item) => item !== value)
        )
    }
    const selectDiscounts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        console.log(value, checked)
        setSelectedDiscount((prev) =>
            checked ? [...prev, value]  : prev.filter((item) => item !== value)
        )
    }
    const selectReviews = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        console.log(value, checked)
        setSelectedReview((prev) =>
            checked ? [...prev, value]  : prev.filter((item) => item !== value)
        )
    }

    const slideValueChange = (event: Event, newValue: number[]) => {
        setSlideValue(newValue);
    };

    const selectedColors = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedColor((prev) =>
            checked ? [...prev, value]  : prev.filter((item) => item !== value)
        )
    }

    


    return(
        <div className="main-side-bar">
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Chip label="T-Shirt" onDelete={handleDelete} sx={{ margin:'4px' }} />
                        <Chip label="Rainwear" onDelete={handleDelete} sx={{ margin:'4px' }} />
                        <Chip label="Jeans" onDelete={handleDelete} sx={{ margin:'4px' }} />
                        <Chip label="Shorts" onDelete={handleDelete} sx={{ margin:'4px' }} />
                        <Chip label="Shirts" onDelete={handleDelete} sx={{ margin:'4px' }} />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {categories.map((item:any) => (
                            <FormControlLabel
                                sx={checkBoxStyle}
                                key={item.value}
                                control={
                                    <Checkbox
                                    checked={selectedCheckBox.includes(item.value)}
                                    onChange={selectCategories}
                                    value={String(item.value)}
                                    />
                                }
                                label={
                                    <div className="flex justify-between w-full">
                                    <span>{item.label}</span>
                                    <span className="text-gray-500 text-sm">
                                        ({item.count})
                                    </span>
                                    </div>
                                }
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ width: '100%', marginTop:'30px' }}>
                            <Slider
                                marks={marks}
                                min={MIN}
                                max={MAX}
                                getAriaLabel={() => 'Temperature range'}
                                value={slideValue}
                                onChange={slideValueChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography
                                variant="body2"
                                sx={{ cursor: 'pointer' }}
                                >
                                $ {slideValue[0]}
                                </Typography>
                                <Typography
                                variant="body2"
                                sx={{ cursor: 'pointer', textAlign:'right' }}
                                >
                                $ {slideValue[1]}
                            </Typography>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Color</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {color.map((item:any) => (
                            <Checkbox key={item.value}
                                sx={{
                                    background:item.color,
                                    color: item.color,
                                    width:'35px',
                                    height:'35px',
                                    fontSize:'20px',
                                    margin:'4px',
                                    '&.Mui-checked': {
                                        background:item.color,
                                        color: 'white', // Color when checked
                                    },
                                    '&:hover': {
                                        background:item.color,
                                        color: 'white', // Color when checked
                                    },
                                }}
                                {...label} icon={<CheckIcon />} 
                                checkedIcon={<CheckIcon />}
                                checked={selectedColor.includes(String(item.value))}
                                value={String(item.value)}
                                onChange={selectedColors}
                            />
                        ))}
                        
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Customer Review</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {review.map((item:any) => (
                            <FormControlLabel
                                sx={checkBoxStyle}
                                key={item.value}
                                control={
                                    <Checkbox
                                    checked={selectedReview.includes(item.value)}
                                    onChange={selectReviews}
                                    value={String(item.value)}
                                    />
                                }
                                label={
                                    <div className="flex justify-between w-full">
                                    <span>{item.label}</span>
                                    <span className="text-gray-500 text-sm">
                                        ({item.count})
                                    </span>
                                    </div>
                                }
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-4">
                <Accordion defaultExpanded={true} sx={{ boxShadow: 'none'}}>
                    <AccordionSummary sx={{ borderBottom: '1px solid rgba(0, 0, 0, .12)' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Discount</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {discount.map((item:any) => (
                            <FormControlLabel
                                sx={checkBoxStyle}
                                key={item.value}
                                control={
                                    <Checkbox
                                    checked={selectedDiscount.includes(item.value)}
                                    onChange={selectDiscounts}
                                    value={String(item.value)}
                                    />
                                }
                                label={
                                    <div className="flex justify-between w-full">
                                    <span>{item.label}</span>
                                    <span className="text-gray-500 text-sm">
                                        ({item.count})
                                    </span>
                                    </div>
                                }
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}