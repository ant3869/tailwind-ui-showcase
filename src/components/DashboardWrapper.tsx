import React from 'react';
import MasterDashboard from './MasterDashboard';

interface DashboardWrapperProps {
  className?: string;
  style?: React.CSSProperties;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ className, style }) => (
  <div className={className} style={style}>
    <MasterDashboard />
  </div>
);

export default DashboardWrapper;
