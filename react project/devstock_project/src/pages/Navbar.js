import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
}
