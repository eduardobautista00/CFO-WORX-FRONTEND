import React from "react";
import StickyHeader from "../../SideBar/StickyHeader";
import Card from "../../Card/Card";

import "./Reports.css";

import reports from "./dummyReport";
function Reports() {
  return (
    <div className="container">
      <StickyHeader />

      <div className="report-cards">
        {reports.map((report) => (
          <Card
            key={report.id}
            first_name={report.first_name}
            last_name={report.last_name}
            status={report.status}
            end_date={report.end_date}
            total_hours={report.total_hours_work}
          />
        ))}
      </div>
    </div>
  );
}

export default Reports;
