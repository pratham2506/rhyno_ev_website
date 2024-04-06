import React from 'react'
import './ResponsiveCard.css'
import { Link } from 'react-router-dom'
import InsurPage from '../../assets/solution.png'

const ResponsiveCard = () => {
  return (
    <div style={{padding: '100px 0 0'}}>
        {/* <div id="intern_pro" > */}
        {/* <div className="intern_pro" style={{padding: '70px 1rem'}}>
            <div className="intern_pro_img">
                <img src={InsurPage} alt="" />
            </div>
            <div className="intern_pro_info">
                <span>Secure your Drones</span>
                <h1>Drone Insurance Tailored to Your Specific Needs</h1>
                <p>Our drone insurance policies provide coverage for both commercial and personal use of drones, and we offer a variety of coverage options to meet your specific needs. Whether you need coverage for a single drone or an entire fleet, we can help you find the policy that fits your needs and budget.</p>
                
                <div className="uni_btn">
                        <Link to='/insuaranceForm' className='uni_button'>Contact us</Link>
                    </div>
            </div>
        </div> */}
    {/* </div> */}
        <div className="di-covered">
            <h1>What is Covered?</h1>
            <div className="di-coveredin">
                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_accidental.svg" alt="" />
                    <h3>Accidental Drone Damage</h3>
                    <p>Damage to the drone body in case of accident</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_tpproperty.svg" alt="" />
                    <h3>Third Party Property Damage</h3>
                    <p>Accidental damage to a property belonging to a third person</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_tpinjury.svg" alt="" />
                    <h3>Third Party Bodily Injury</h3>
                    <p>Accidental bodily injury or death to a third person</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_BVLOS.png" alt="" />
                    <h3>BVLOS coverage</h3>
                    <p>Get this add-on if you are conducting flights Beyond Visual Line of Sight</p>
                </div>


                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/advisor/ic_training.png" alt="" />
                    <h3>RPTO / Training Cover (Add-on)</h3>
                    <p>Cover for DGCA Certified Training Drones - Third party, Comprehensive & Add-ons</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_nightFlying.svg" alt="" />
                    <h3>Night Flying Cover</h3>
                    <p>Fly risk-free in the night with night flying add-on cover</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_allindia.svg" alt="" />
                    <h3>All India Coverage</h3>
                    <p>You can operate your flight within permissible flying zones across India</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_annual.svg" alt="" />
                    <h3>Annual Plan</h3>
                    <p>Purchase once and fly without any stress, all through the year</p>
                </div>
            </div>
        </div>









        {/* <div className="di-covered">
            <h1>Requirements</h1>
            <div className="di-coveredin">
                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_register.svg" alt="" />
                    <h3>Drone Registration</h3>
                    <p>Your drone should be registered with DGCA and have a UIN</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_invoice.svg" alt="" />
                    <h3>Invoice Values & Invoice</h3>
                    <p>The drone you want to get covered should have a purchase invoice</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_purchase.svg" alt="" />
                    <h3>Purchased within 3 Years</h3>
                    <p>Your drone to be covered should be purchased on or after 2019</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_drone_images.svg" alt="" />
                    <h3>Drone Images</h3>
                    <p>Latest Images of your drone</p>
                </div>
            </div>


        </div>




        <h1 className='h1h1'>Why get your Drone Cover from US?</h1>

        
        <div className="di-whyus">
            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_drone_insurance.svg" alt="" />
                <h2>Comprehensive Coverage</h2>
                <p>When you get your drone insurance from us, you can expect comprehensive coverage that protects you against various risks and liabilities.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_less_sales.svg" alt="" />
                <h2>Responsive Claims Handling</h2>
                <p>In the unfortunate event of a claim, our dedicated claims handling team is here to provide prompt and efficient assistance.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_lowest_premium.svg" alt="" />
                <h2>Competitive Pricing</h2>
                <p>We strive to offer competitive pricing for our drone insurance policies.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_insurance+.svg" alt="" />
                <h2>Risk Management Support</h2>
                <p>Beyond insurance coverage, we provide risk management support to help you mitigate and minimize potential risks.</p>
                <small>We Bond with the Best!</small>
            </div>
        </div> */}
    </div>
  )
}

export default ResponsiveCard