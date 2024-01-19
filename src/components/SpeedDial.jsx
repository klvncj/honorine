import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import { FaInstagram } from "react-icons/fa";
  import { MdOutlineMailOutline } from "react-icons/md";
   
  export function DefaultSpeedDial() {
    return (
      <div className="relative h-80 w-full">
        <div className="absolute bottom-0 right-0">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <FaInstagram size={28}/>
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction>
                <MdOutlineMailOutline size={28}/>
              </SpeedDialAction>
              <SpeedDialAction>
              <FaInstagram size={28}/>
              </SpeedDialAction>
              <SpeedDialAction>
              <FaInstagram size={28}/>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }
  