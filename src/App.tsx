import { BrowserRouter, Route, Routes } from "react-router"
import { Calendar } from "./components/Calendar"
import { EventLists } from "./components/EventLists"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Calendar />} />
                <Route path="/events" element={<EventLists />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
