import React from 'react';
import Test from './Core/Test';
import Home from './Core/Home';
import Dashboard from './Core/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CalendarHeader } from '../CalendarHeader';
import { Day } from '../Day';
import { NewEventModal } from '../NewEventModal';
import { DeleteEventModal } from '../DeleteEventModal';
import { useDate } from '../hooks/useDate';

class App extends React.Component {

  const [nav, setNav] = useState();
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  const eventForDate = date => events.find(e => e.date === date);
  
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/t" element={<Test />} exact/>
            <Route path="/dashboard" element={<Dashboard />} exact/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;