import { useEffect, useState } from 'react'
import './App.css'

import sunnyWeather from './images/sunnyWeather.gif'
import weatherGif from './images/weatherStatus.gif'
import snow from './images/snow.gif'
import rainy from './images/rainy.gif'
import partlyCloudy from './images/parcaliBulutlu.gif'
import overCast from './images/Overcast.gif'
import mist from './images/Mist.gif'
import acikHava from './images/acikHava.gif'

import axios from 'axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';




function App() {
  const [whichCity, setWhichCity] = useState('Istanbul')
  const baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=04b990c92bae4f02866141314250507&q='

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const [forecastDay, setForecastDay] = useState('')
  const [forecastDayIcon, setForecastDayIcon] = useState('')
  const [temp, setTemp] = useState('')
  const [date, setDate] = useState('')

  const [forecastDay1, setForecastDay1] = useState('')
  const [forecastDayIcon1, setForecastDayIcon1] = useState('')
  const [temp1, setTemp1] = useState('')
  const [date1, setDate1] = useState('')

  const [forecastDay2, setForecastDay2] = useState('')
  const [forecastDayIcon2, setForecastDayIcon2] = useState('')
  const [temp2, setTemp2] = useState('')
  const [date2, setDate2] = useState('')

  const [forecastDay3, setForecastDay3] = useState('')
  const [forecastDayIcon3, setForecastDayIcon3] = useState('')
  const [temp3, setTemp3] = useState('')
  const [date3, setDate3] = useState('')

  const [forecastDay4, setForecastDay4] = useState('')
  const [forecastDayIcon4, setForecastDayIcon4] = useState('')
  const [temp4, setTemp4] = useState('')
  const [date4, setDate4] = useState('')

  const [forecastDayHour2, setForecastDayHour2] = useState('')
  const [forecastDayHour2text, setForecastDayHour2text] = useState('')
  const [forecastDayHour7, setForecastDayHour7] = useState('')
  const [forecastDayHour7text, setForecastDayHour7text] = useState('')
  const [forecastDayHour12, setForecastDayHour12] = useState('')
  const [forecastDayHour12text, setForecastDayHour12text] = useState('')
  const [forecastDayHour17, setForecastDayHour17] = useState('')
  const [forecastDayHour17text, setForecastDayHour17text] = useState('')
  const [forecastDayHour22, setForecastDayHour22] = useState('')
  const [forecastDayHour22text, setForecastDayHour22text] = useState('')

  let foreCastDayStatus;



  const getTheWeather = async (location) => {
    const response = await axios.get(`${baseUrl}${location}&days=30&lang=tr`);
    console.log(response)
    const country = response.data.location.country
    const city = response.data.location.name
    setCity(city)
    setCountry(country)

    const forecastDay = response.data.forecast.forecastday[0].day.condition.text
    const forecastDayIcon = response.data.forecast.forecastday[0].day.condition.icon
    const temp = response.data.forecast.forecastday[0].day.avgtemp_c
    const date = response.data.forecast.forecastday[0].date

    const forecastDayHour2 = response.data.forecast.forecastday[0].hour[2].temp_c
    const forecastDayHour2text = response.data.forecast.forecastday[0].hour[2].condition.text
    const forecastDayHour7 = response.data.forecast.forecastday[0].hour[7].temp_c
    const forecastDayHour7text = response.data.forecast.forecastday[0].hour[7].condition.text
    const forecastDayHour12 = response.data.forecast.forecastday[0].hour[12].temp_c
    const forecastDayHour12text = response.data.forecast.forecastday[0].hour[12].condition.text
    const forecastDayHour17 = response.data.forecast.forecastday[0].hour[17].temp_c
    const forecastDayHour17text = response.data.forecast.forecastday[0].hour[17].condition.text
    const forecastDayHour22 = response.data.forecast.forecastday[0].hour[22].temp_c
    const forecastDayHour22text = response.data.forecast.forecastday[0].hour[22].condition.text

    const forecastDay1 = response.data.forecast.forecastday[1].day.condition.text
    const forecastDayIcon1 = response.data.forecast.forecastday[1].day.condition.icon
    const temp1 = response.data.forecast.forecastday[1].day.avgtemp_c
    const date1 = response.data.forecast.forecastday[1].date

    const forecastDay2 = response.data.forecast.forecastday[2].day.condition.text
    const forecastDayIcon2 = response.data.forecast.forecastday[2].day.condition.icon
    const temp2 = response.data.forecast.forecastday[2].day.avgtemp_c
    const date2 = response.data.forecast.forecastday[2].date

    const forecastDay3 = response.data.forecast.forecastday[3].day.condition.text
    const forecastDayIcon3 = response.data.forecast.forecastday[3].day.condition.icon
    const temp3 = response.data.forecast.forecastday[3].day.avgtemp_c
    const date3 = response.data.forecast.forecastday[3].date

    const forecastDay4 = response.data.forecast.forecastday[4].day.condition.text
    const forecastDayIcon4 = response.data.forecast.forecastday[4].day.condition.icon
    const temp4 = response.data.forecast.forecastday[4].day.avgtemp_c
    const date4 = response.data.forecast.forecastday[4].date

    setForecastDay(forecastDay)
    setForecastDayIcon(forecastDayIcon)
    setTemp(temp)
    setDate(date)
    setForecastDayHour2(forecastDayHour2)
    setForecastDayHour2text(forecastDayHour2text)
    setForecastDayHour7(forecastDayHour7)
    setForecastDayHour7text(forecastDayHour7text)
    setForecastDayHour12(forecastDayHour12)
    setForecastDayHour12text(forecastDayHour12text)
    setForecastDayHour17(forecastDayHour17)
    setForecastDayHour17text(forecastDayHour17text)
    setForecastDayHour22(forecastDayHour22)
    setForecastDayHour22text(forecastDayHour22text)

    setForecastDay1(forecastDay1)
    setTemp1(temp1)
    setDate1(date1)
    setForecastDayIcon1(forecastDayIcon1)

    setForecastDay2(forecastDay2)
    setTemp2(temp2)
    setDate2(date2)
    setForecastDayIcon2(forecastDayIcon2)

    setForecastDay3(forecastDay3)
    setTemp3(temp3)
    setDate3(date3)
    setForecastDayIcon3(forecastDayIcon3)

    setForecastDay4(forecastDay4)
    setTemp4(temp4)
    setDate4(date4)
    setForecastDayIcon4(forecastDayIcon4)

    foreCastDayStatus = forecastDay
    const grid = document.querySelector('#gif')
    if (foreCastDayStatus == 'Güneşli') {
      grid.style.backgroundImage = `url(${sunnyWeather})`
    }
    else if (foreCastDayStatus.includes('yağmur')) {
      grid.style.backgroundImage = `url(${rainy})`
    }
    else if (foreCastDayStatus.includes('kar')) {
      grid.style.backgroundImage = `url(${snow})`
    }
    else if (foreCastDayStatus.includes('sis')) {
      grid.style.backgroundImage = `url(${mist})`
    }
    else if (foreCastDayStatus.includes('kapalı')) {
      grid.style.backgroundImage = `url(${acikHava})`
    }
    else if (foreCastDayStatus.includes('bulutlu')) {
      grid.style.backgroundImage = `url(${partlyCloudy})`
    }


  }
  useEffect(() => {
    getTheWeather(whichCity)
  }, [])


  return (
    <Box sx={{ width: '100%', height: '100vh' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <Box borderRadius={'3rem 3rem 0 0'} width={'18rem'} height={'5rem'} p={2} display={'flex'} gap={3} sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', marginTop: '5rem', background: 'linear-gradient(135deg,rgb(143, 142, 142) 50%,rgb(205, 205, 205) 100%,rgb(156, 156, 156) 70%)' }} justifyContent={'center'} alignItems={'center'}>
        <TextField

          sx={{
            '& .MuiInput-underline:before': {
              borderBottomColor: 'darkgray',
              transition: 'border-bottom-color 0.4s ease'
            },
            '& .MuiInput-underline:hover:before': {
              borderBottomColor: 'darkgray'
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
              transition: 'border-bottom-color 0.4s ease'
            }
          }} onChange={(e) => setWhichCity(e.target.value)} value={whichCity} size='small' label='Şehir Giriniz' variant="standard" InputProps={{

            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: 'white' }} onClick={() => getTheWeather(whichCity)} edge="end" >
                  <SearchIcon colo />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              '&:after': { borderBottomColor: 'white' }, color: 'white'
            }
          }
          } InputLabelProps={{

            sx: { color: 'whitesmoke', '&.Mui-focused': { color: 'white' } },
          }} />
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
            {temp}°
          </Typography>
          <Typography fontSize={'0.5rem'} display={'flex'} alignItems={'center'} >
            {date}
          </Typography>
        </Box>
      </Box>


      <Grid container sx={{
        width: { xs: '23rem', sm: '37rem', md: '56rem', xl: '65rem', lg: '65rem' }, height: '35rem', background: 'linear-gradient(135deg, #c0c0c0 0%, #f0f0f0 50%, #a9a9a9 70%)',
        borderRadius: 2,
      }}>
        <Grid direction={'column'} container size={{ xs: 12, md: 8.5 }}>
          <Grid size={12} sx={{ height: '65%' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid id={'gif'} color={'white'} direction={'column'} container sx={{ width: '92%', height: '85%', backgroundImage: `url(${weatherGif})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100% 100%' }} borderRadius={2}
              display={'flex'} flexDirection={'column'}>
              <Grid size={12} height={'45%'} p={4}>
                <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} gap={1}>
                  <LocationPinIcon />{city}/{country}
                </Typography>
              </Grid>
              <Grid size={12} container height={'55%'} pb={4} pr={4} pl={4}>
                <Grid size={9} display={'flex'} flexDirection={'column'} gap={2.5}>

                  <Typography pl={0.2} fontSize={'1rem'} display={'flex'} alignItems={'center'} gap={1}>
                    Hava Durumu
                  </Typography>
                  <Box>
                    <Typography fontSize={'2.3rem'} display={'flex'} alignItems={'center'} gap={1}>
                      {forecastDay}
                    </Typography>


                  </Box>
                </Grid>
                <Grid size={3} p={1}>
                  <img width={'100%'} height={'100%'} src={forecastDayIcon} alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12} sx={{ height: '35%' }} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
            <Grid color='white' container direction={'column'} sx={{ width: '92%', height: '85%', background: 'linear-gradient(135deg,rgb(146, 145, 145) 0%,rgb(148, 147, 147) 50%,rgb(147, 147, 147) 70%)' }} borderRadius={2}>
              <Grid height={'20%'} size={12}>
                <Typography pt={1.5} pl={4} fontSize={'0.9rem'} display={'flex'} alignItems={'center'} gap={1}>
                  Bugünün Hava Durumu
                </Typography>
              </Grid>
              <Grid container pl={5} pt={2} pb={1} height={'80%'} size={12}>
                <Grid size={2.4}>
                  <Typography pl={0.2} sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} display={'flex'} alignItems={'center'} >
                    {forecastDayHour2}°
                  </Typography>
                  <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                    02.00
                  </Typography>
                  <Typography fontSize={'0.7rem'} display={'flex'} alignItems={'center'} >
                    {forecastDayHour2text}
                  </Typography>
                </Grid>
                <Grid size={2.4}>
                  <Typography pl={0.2} sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} display={'flex'} alignItems={'center'} >
                    {forecastDayHour7}°
                  </Typography>
                  <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                    07.00
                  </Typography>
                  <Typography fontSize={'0.7rem'} display={'flex'} alignItems={'center'} >
                    {forecastDayHour7text}
                  </Typography>
                </Grid>
                <Grid size={2.4}>
                  <Typography pl={0.2} sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} display={'flex'} alignItems={'center'} >
                    {forecastDayHour12}°
                  </Typography>
                  <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                    12.00
                  </Typography>
                  <Typography fontSize={'0.7rem'} display={'flex'} alignItems={'center'} >
                    {forecastDayHour12text}
                  </Typography>
                </Grid>
                <Grid size={2.4}>
                  <Typography pl={0.2} sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} display={'flex'} alignItems={'center'} >
                    {forecastDayHour17}°
                  </Typography>
                  <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                    17.00
                  </Typography>
                  <Typography fontSize={'0.7rem'} display={'flex'} alignItems={'center'} >
                    {forecastDayHour17text}
                  </Typography>
                </Grid>
                <Grid size={2.4}>
                  <Typography pl={0.2} sx={{ fontSize: { xs: '1rem', sm: '2rem' } }} display={'flex'} alignItems={'center'} >
                    {forecastDayHour22}°
                  </Typography>
                  <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                    22.00
                  </Typography>
                  <Typography fontSize={'0.7rem'} display={'flex'} alignItems={'center'} >
                    {forecastDayHour22text}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction={'column'} size={{ xs: 0, xl: 3.5, md: 3.5 }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, color: 'white', borderRadius: '0px 7px 7px 0px', background: 'linear-gradient(135deg,rgb(143, 142, 142) 50%,rgb(205, 205, 205) 100%,rgb(156, 156, 156) 70%)' }}>
          <Grid size={12} height={'40%'} p={2}  >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <TextField

                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'darkgray',
                    transition: 'border-bottom-color 0.4s ease'
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: 'darkgray'
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                    transition: 'border-bottom-color 0.4s ease'
                  }
                }} onChange={(e) => setWhichCity(e.target.value)} value={whichCity} size='small' label='Şehir Giriniz' variant="standard" InputProps={{

                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color: 'white' }} onClick={() => getTheWeather(whichCity)} edge="end" >
                        <SearchIcon colo />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    '&:after': { borderBottomColor: 'white' }, color: 'white'
                  }
                }
                } InputLabelProps={{

                  sx: { color: 'whitesmoke', '&.Mui-focused': { color: 'white' } },
                }} />
              <Typography fontSize={'4rem'} display={'flex'} alignItems={'center'} >
                {temp}°
              </Typography>
              <Typography fontSize={'0.9rem'} display={'flex'} alignItems={'center'} >
                {date}
              </Typography>
            </Box>
            <hr />
          </Grid>
          <Grid size={12} height={'60%'} p={3} pt={0} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={5}>
            <Typography fontSize={'1.4rem'} display={'flex'} alignItems={'center'} >
              Gelecek Günler
            </Typography>
            <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100%'}>
              <Box display={'flex'} height={'25%'} >
                <img height={'100%'} width={'23%'} src={forecastDayIcon1} alt="" />
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                  <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                    {date1}
                  </Typography>
                  <Typography fontSize={'0.6rem'} display={'flex'} alignItems={'center'} >
                    {forecastDay1}
                  </Typography>
                </Box>
                <hr style={{ marginLeft: '1.5rem', marginRight: '1.3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                  {temp1}°
                </Typography>
              </Box>
              <Box display={'flex'} height={'25%'}>
                <img height={'100%'} width={'23%'} src={forecastDayIcon2} alt="" />
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                  <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                    {date2}
                  </Typography>
                  <Typography fontSize={'0.6rem'} display={'flex'} alignItems={'center'} >
                    {forecastDay2}
                  </Typography>
                </Box>
                <hr style={{ marginLeft: '1.5rem', marginRight: '1.3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                  {temp2}°
                </Typography>
              </Box>
              <Box display={'flex'} height={'25%'}>
                <img height={'100%'} width={'23%'} src={forecastDayIcon3} alt="" />
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                  <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                    {date3}
                  </Typography>
                  <Typography fontSize={'0.6rem'} display={'flex'} alignItems={'center'} >
                    {forecastDay3}
                  </Typography>
                </Box>
                <hr style={{ marginLeft: '1.5rem', marginRight: '1.3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                  {temp3}°
                </Typography>
              </Box>
              <Box display={'flex'} height={'25%'}>
                <img height={'100%'} width={'23%'} src={forecastDayIcon4} alt="" />
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                  <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                    {date4}
                  </Typography>
                  <Typography fontSize={'0.6rem'} display={'flex'} alignItems={'center'} >
                    {forecastDay4}
                  </Typography>
                </Box>
                <hr style={{ marginLeft: '1.5rem', marginRight: '1.3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                  {temp4}°
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box height={'8rem'} width={'15rem'} sx={{ display: { xs: 'flex', md: 'none' }, borderRadius: '0 0 3rem 3rem', color: 'white', background: 'linear-gradient(135deg,rgb(143, 142, 142) 50%,rgb(205, 205, 205) 100%,rgb(156, 156, 156) 70%)' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >

        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
          <Box display={'flex'} height={'50%'} >
            <img height={'100%'} width={'30%'} src={forecastDayIcon1} alt="" />
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
              <Typography fontSize={'0.8rem'} display={'flex'} alignItems={'center'} >
                {date1}
              </Typography>
              <Typography width={'5rem'} fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                {forecastDay1}
              </Typography>
            </Box>
            <hr style={{ marginLeft: '1rem', marginRight: '0.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
              {temp1}°
            </Typography>
          </Box>
          <Box display={'flex'} height={'50%'}>
            <img height={'100%'} width={'30%'} src={forecastDayIcon2} alt="" />
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
              <Typography fontSize={'0.8rem'} display={'flex'} alignItems={'center'} >
                {date2}
              </Typography>
              <Typography width={'5rem'} fontSize={'1rem'} display={'flex'} alignItems={'center'} >
                {forecastDay2}
              </Typography>
            </Box>
            <hr style={{ marginLeft: '1rem', marginRight: '0.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <Typography fontSize={'1rem'} display={'flex'} alignItems={'center'} >
              {temp2}°
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default App
