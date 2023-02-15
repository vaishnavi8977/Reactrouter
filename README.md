Router In depth:

https://reactrouter.com/en/main/routers/create-browser-router

Step1: define a const call createBrowaerRouter() 
const route = createBrowaerRouter(
    createRoutesFromElements(
        <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
       
      </Routes>
    )
)