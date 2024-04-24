import React from 'react'
import './CompareTable.css'
import IMG1 from '../../assets/1.png'

const CompareTable = () => {
  return (
    <div>
      <div class="compare p-70">
  <div class="container">
    <div class="section-head text-center">
      <h2 class="mb-3 mx-auto">Let us show you a complete comparison of all our rides</h2>
      
    </div>
    <div class="c-table">
      <table class="w-100 h-table">
        <thead>
          <tr>
            <th></th>
            <td><img src={IMG1} alt="" />SE03</td>
            <td><img src={IMG1} alt="" />SE03 Max</td>
            <td><img src={IMG1} alt="" />SE03 LITE</td>
          </tr>
        </thead>
      </table>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="p-0"></th>
            <td class="p-0"></td>
            <td class="p-0"></td>
            <td class="p-0"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Battery</th>
            <td>2.7Kwh</td>
            <td>2.7Kwh</td>
            <td>1.8Kwh</td>
          </tr>
          <tr>
            <th>Battery features</th>
            <td>LFP with 1500 cycles,
Active Balancing,
Waterproof (IP67)
</td>
<td>LFP with 1500 cycles,
Active Balancing,
Waterproof (IP67)
</td>
<td>LFP with 1500 cycles,
Active Balancing,
Waterproof (IP67)
</td>
          </tr>
          <tr>
            <th>Battery warranty</th>
            <td>3 years</td>
            <td>3 years</td>
            <td>3 years</td>
          </tr>
          <tr>
            <th>Charging time</th>
            <td>4 hours (12A)</td>
            <td>4 hours (12A)</td>
            <td>3 hours (12A)</td>
          </tr>
          <tr>
            <th>Motor</th>
            <td>1500W</td>
            <td>2000W</td>
            <td>1500W</td>
          </tr>
          <tr>
            <th>Max speed</th>
            <td>55 km/h</td>
            <td>65 km/h</td>
            <td>55 km/h</td>
          </tr>
          <tr>
            <th>Warranty on electronics</th>
            <td>1 year</td>
            <td>1 year</td>
            <td>1 year</td>
          </tr>
          <tr>
            <th>Max range (@30km/h)</th>
            <td>150 km</td>
            <td>120 km</td>
            <td>100 km</td>
          </tr>
          <tr>
            <th>Max range (@45km/h)</th>
            <td>110 km</td>
            <td>100 km</td>
            <td>90 km</td>
          </tr>
          <tr>
            <th>Max range (@full speed)</th>
            <td>90 km</td>
            <td>80 km</td>
            <td>60 km</td>
          </tr>
          <tr>
            <th>Other key benefits</th>
            <td>Fire-safe Battery,
Range prediction,
Comfortable ride,
Stable and safe
</td>
            <td>Fire-safe Battery,
Range prediction,
Comfortable ride,
Stable and safe
</td>
            <td>Fire-safe Battery,
Range prediction,
Comfortable ride,
Stable and safe
</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  )
}

export default CompareTable
