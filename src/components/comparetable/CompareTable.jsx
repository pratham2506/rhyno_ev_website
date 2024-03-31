import React from 'react'
import './CompareTable.css'
import IMG1 from '../../assets/1.png'

const CompareTable = () => {
  return (
    <div>
      <div class="compare p-70">
  <div class="container">
    <div class="section-head text-center">
      <h2 class="mb-3 mx-auto">Let us show you a complete comparison of all our plans</h2>
      <p class="mb-0">Our virtual private servers are built from the ground using all SSD storage. Enjoy increased power,
        flexibility, and control for your websites.</p>
    </div>
    <div class="c-table">
      <table class="w-100 h-table">
        <thead>
          <tr>
            <th></th>
            <td><img src={IMG1} alt="" />Shared</td>
            <td><img src={IMG1} alt="" />VPS</td>
            <td><img src={IMG1} alt="" />Dedicated</td>
            <td><img src={IMG1} alt="" />Cloud</td>
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
            <td class="p-0"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Free domain with annual plan</th>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <th>Websites</th>
            <td>1</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <th>Disk space</th>
            <td>100 GB</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <th>Monthly bandwidth</th>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <th>Input/output (I/O)</th>
            <td>1024</td>
            <td>2048</td>
            <td>2048</td>
            <td>2048</td>
          </tr>
          <tr>
            <th>FTP users</th>
            <td>60</td>
            <td>60</td>
            <td>60</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <th>MySQL databases</th>
            <td>10 x 1 GB</td>
            <td>25 x 1 GB</td>
            <td>50 x 3 GB</td>
            <td>Unlimited<br/> x 2 GB</td>
          </tr>
          <tr>
            <th>Database backup/restore</th>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <th>Direct database access</th>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <th>DNS management</th>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <th>Auto-responder</th>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <th>Total email storage</th>
            <td>5 GB</td>
            <td>5 GB</td>
            <td>5 GB</td>
            <td>Unlimited</td>
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
