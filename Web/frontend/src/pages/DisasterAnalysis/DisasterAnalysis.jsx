import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "./DisasterAnalysis.css";

function DisasterAnalysis() {
  const [Role, setRole] = useState("");
  const [Report, setReport] = useState(
    "Fetching Report based on latest data..."
  );
  const [g, setG] = useState(null);
  useEffect(() => {
    const fetchReport = async () => {
      const reportData = {
        general_information: {
          location: "Riverside City, California",
          date_time: "2024-08-25T14:45:00-08:00",
          magnitude: 7.5,
          depth_km: 10,
        },
        casualties_and_injuries: {
          total_casualties: 157,
          fatalities: 120,
          severely_injured: 25,
          minor_injuries: 12,
          missing_persons: 45,
          age_distribution: {
            children_0_14: {
              fatalities: 15,
              injuries: 10,
            },
            adults_15_64: {
              fatalities: 80,
              injuries: 20,
            },
            elderly_65_plus: {
              fatalities: 25,
              injuries: 7,
            },
          },
        },
        buildings_affected: {
          total_buildings: 5000,
          damage_breakdown: {
            completely_destroyed: 650,
            severely_damaged: 1500,
            moderately_damaged: 1800,
            minor_damage: 1050,
          },
          types_of_buildings: {
            residential: 4000,
            commercial: 600,
            industrial: 200,
            government_institutional: 200,
          },
        },
        infrastructure_damage: {
          roads: {
            total_damaged_km: 120,
            blocked_impassable_km: 30,
            minor_damages_km: 90,
          },
          bridges: {
            total_affected: 15,
            collapsed: 5,
            severely_damaged: 7,
            minor_damages: 3,
          },
          utilities: {
            electricity_outage_percent: 80,
            water_supply_disruption_percent: 50,
            gas_lines_leakage_damage_percent: 10,
          },
        },
        relief_efforts: {
          evacuation_centers: {
            total_centers: 20,
            total_evacuees: 10000,
          },
          rescue_operations: {
            search_and_rescue_teams: 25,
            helicopters_used: 5,
            rescued_from_rubble: 180,
          },
          medical_assistance: {
            field_hospitals: 4,
            medical_personnel_deployed: 200,
            ambulances: 30,
          },
          food_water_distribution: {
            water_bottles_distributed: 100000,
            food_packets_distributed: 80000,
          },
          volunteer_efforts: {
            volunteers: 1200,
            local_organizations_involved: 30,
          },
        },
        economic_impact: {
          estimated_total_damage_usd: 1500000000,
          damage_breakdown: {
            residential_usd: 600000000,
            commercial_usd: 400000000,
            infrastructure_usd: 300000000,
            other_usd: 200000000,
          },
        },
        environmental_impact: {
          landslides: 5,
          river_blockages: 2,
          aftershocks: {
            number_of_aftershocks: 30,
            magnitude_range: "2.5 - 5.0",
          },
        },
        communication_networks: {
          cell_towers_damaged: 20,
          total_cell_towers: 100,
          internet_outage_percent: 70,
          radio_stations_not_operational: 2,
          total_radio_stations: 5,
        },
      };

      const reportGenURL = "http://127.0.0.1:5000/generate-report";
      try {
        const response = await axios({
          method: "post",
          url: reportGenURL,
          headers: { "Access-Control-Allow-Origin": "*" },
          data: { reportData },
        });
        console.log(response);
        setReport(response.data.report);
        const graphs = [];
        for (let i = 0; i < response.data.graphs.length; i++) {
          graphs.push(response.data.graphs[i].slice(1, -1));
        }
        setG(graphs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReport();

    const role = localStorage.getItem("role");

    setRole(role);
    console.log(role);
  }, []);

  // let report = `## Disaster Report: Riverside City, California Earthquake (2024-08-25)\n\nThis report provides a comprehensive analysis of the earthquake that struck Riverside City, California on August 25th, 2024, with a magnitude of 7.5 and a depth of 10 kilometers. The event caused significant damage and casualties, necessitating a large-scale disaster response effort. \n\n**I. General Information and Impact**\n\n* **Location:** Riverside City, California.\n* **Date and Time:** 2024-08-25T14:45:00-08:00 (local time).\n* **Magnitude:** 7.5, categorized as a major earthquake with significant destructive potential.\n* **Depth:** 10 kilometers, indicating a relatively shallow quake, which amplifies the intensity at the surface.\n\nThe earthquake caused widespread devastation in Riverside City, resulting in:\n\n* **Casualties:** 157 total casualties, including 120 fatalities, 25 severely injured, 12 minor injuries, and 45 missing persons. \n    * **Age Distribution:** The majority of fatalities were adults (15-64 years old), accounting for 80 out of 120 deaths. Children (0-14) accounted for 15 fatalities, while 25 elderly individuals (65+) perished. \n* **Building Damage:**  Out of 5,000 buildings, 650 were completely destroyed, 1,500 severely damaged, 1,800 moderately damaged, and 1,050 sustained minor damage. \n    * **Types of Buildings:**  Residential buildings suffered the most damage with 4,000 affected, followed by commercial (600), industrial (200), and government/institutional (200).\n\n**II. Infrastructure Damage and Disruption**\n\nThe earthquake severely disrupted vital infrastructure, posing significant challenges to rescue and recovery efforts:\n\n* **Roads:** 120 kilometers of roads were damaged, with 30 kilometers blocked or impassable, and 90 kilometers experiencing minor damage.\n* **Bridges:**  15 bridges were affected, including 5 collapses, 7 severely damaged, and 3 with minor damage.\n* **Utilities:**  A significant portion of the city experienced major disruptions to essential services:\n    * **Electricity:** 80% outage.\n    * **Water Supply:** 50% disruption.\n    * **Gas Lines:** 10% leakage and damage.\n\n**III. Relief and Response Efforts**\n\nA large-scale response effort was immediately initiated to address the earthquake's aftermath:\n\n* **Evacuation:**  20 evacuation centers were established, accommodating 10,000 evacuees.\n* **Rescue Operations:** 25 search and rescue teams with 5 helicopters were deployed, rescuing 180 individuals from rubble.\n* **Medical Assistance:**  4 field hospitals were set up, supported by 200 medical personnel and 30 ambulances. \n* **Food and Water Distribution:**  100,000 water bottles and 80,000 food packets were distributed to affected populations.\n* **Volunteer Efforts:** 1,200 volunteers and 30 local organizations actively participated in relief efforts.\n\n**IV. Economic and Environmental Impact**\n\nThe earthquake inflicted severe economic and environmental damage:\n\n* **Economic Impact:** The estimated total damage cost was $1.5 billion USD. \n    * **Breakdown:** $600 million from residential damage, $400 million from commercial damage, $300 million from infrastructure damage, and $200 million from other sources.\n* **Environmental Impact:**  The earthquake triggered landslides in 5 locations and caused river blockages in 2 areas. \n    * **Aftershocks:** 30 aftershocks were recorded, ranging in magnitude from 2.5 to 5.0, further complicating recovery efforts and posing a risk of additional damage.\n\n**V. Communication Networks**\n\nThe earthquake caused significant disruption to communication infrastructure, hindering coordination and information dissemination:\n\n* **Cell Towers:** 20 out of 100 cell towers were damaged, impacting mobile phone services.\n* **Internet:**  70% internet outage occurred, limiting access to information and online communication. \n* **Radio Stations:**  2 out of 5 radio stations were non-operational, impacting emergency broadcasts and local news dissemination.\n\n**VI. Disaster Management Implications**\n\nThe Riverside City earthquake highlights several crucial aspects of disaster management:\n\n* **Preparedness:**  The earthquake demonstrates the need for robust earthquake preparedness plans, including:\n    * **Early Warning Systems:**  Implementing a comprehensive early warning system to provide timely alerts.\n    * **Building Codes:**  Enforcing strict building codes and retrofitting older structures to withstand seismic activity.\n    * **Emergency Kits:** Encouraging households and businesses to prepare emergency kits with essential supplies.\n* **Response:** The rapid and coordinated response efforts were essential in mitigating the earthquake's impact.\n    * **Multi-Agency Coordination:** Effective communication and collaboration between local authorities, first responders, and national agencies were crucial.\n    * **Resource Mobilization:** The quick deployment of rescue teams, medical personnel, and essential supplies was critical.\n    * **Communication Infrastructure:** Ensuring the resilience of communication networks is essential for disaster response and public information dissemination.\n* **Recovery:** The long-term recovery process will require sustained efforts to rebuild infrastructure, support affected communities, and address the long-term social and economic consequences of the disaster.\n    * **Reconstruction and Rehabilitation:**  Prioritizing the restoration of essential infrastructure and housing.\n    * **Community Support:** Providing mental health services and social support to traumatized individuals and communities.\n    * **Economic Recovery:** Implementing economic recovery programs to support businesses and job creation.\n\n**VII. Conclusion**\n\nThe Riverside City earthquake served as a stark reminder of the devastating impact of natural disasters. A comprehensive approach to disaster management, encompassing preparedness, response, and recovery, is essential to mitigate the risks and build resilience to future events. The lessons learned from this disaster must be incorporated into ongoing efforts to ensure the safety and well-being of communities in earthquake-prone regions. \n`;

  // TODO
  // display images
  return (
    <>
      <div className="title">Disaster Report</div>
      {Role === "superAdmin" ? <>SuperAdmin</> : <> Admin</>}
      <ReactMarkdown children={Report} class="md-format" />
      {g && (
        <div className="graphs">
          <div className="title">Supporting Graphs</div>
          <div className="graphs-container">
            {g.map((img) => (
              <img src={`data:image/png;base64,${img}`} alt="Graph" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default DisasterAnalysis;
