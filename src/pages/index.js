import Image from 'next/image'
import Header from '@/components/header'
import one from "../../public/one.jpg"
import two from "../../public/two.jpg"
import three from "../../public/three.jpg"
import four from "../../public/four.jpg"
import five from "../../public/five.jpg"

export default function Home() {
  return (
    <div className='outer'>
        <Header/>

        <div className='body'>
            <Image src={one} height={500} className='img-margin'/>
            <Image src={two} height={600} className='img-margin'/>
            <Image src={three} height={700} className='img-margin'/>
            <Image src={four} height={600} className='img-margin'/>
            <Image src={five} height={500} className='img-margin'/>
        </div>

        <div className='align-center'>
            <a className='work-but' href='/work'>
                browse my work
            </a>
        </div>

    </div>
    
  )
}
