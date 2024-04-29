// Evacuation management
// Model
// evacuationSchema schema
// location
// paths
// lastUpdated

// Controller
// Calculate Fastest Evacuation Path
// Get Current Evacuation Time
// Update Evacuation Path
// List Evacuation Details for All Locations

// Router
// router.get("/evacuation/fastest-path/:location", getFastestPath); // Get fastest path for a location
// router.get("/evacuation/time/:location", getEvacuationTime); // Get current evacuation time for a location
// router.put("/evacuation/update/:location", updateEvacuationPath); // Update evacuation path
// router.get("/evacuation", listEvacuationDetails); // List evacuation details for all locations
//====================================================================================================

// Alert system management
// manage and broadcast alert on different criteria
// Model (follow the dummy data attributes)
// type
// message
// severity
// affectedAreas
// createdAt

// Controller
// Create Alert
// Update Alert
// Delete Alert
// List Alerts

// Router
// router.post("/alerts", createAlert);
// router.put("/alerts/:id", updateAlert);
// router.delete("/alerts/:id", deleteAlert);
// router.get("/alerts", listAlerts);
//====================================================================================================

// Prediction Model management
// Model (follow the dummy data attributes)
// floodPredictionSchema schema
// location
// predictedWaterLevel
// predictedFloodArea
// severity
// predictionDate
// updateAt

// Controller
// Add Prediction Data
// Update Prediction Data
// Delete Prediction Data
// List Predictions

// Router
// router.post("/predictions", addPrediction); // Add flood prediction
// router.put("/predictions/:id", updatePrediction); // Update flood prediction
// router.delete("/predictions/:id", deletePrediction); // Delete flood prediction
// router.get("/predictions", listPredictions); // List all predictions
//====================================================================================================

// Customer support model
// cusSupport schema
// author
// content
// createdAt

// Controller
// Create Post
// Update Post
// Delete Post

// Router
// router.post("/posts", createPost);
// router.post("/posts/:id/comments", addCommentToPost);
// router.delete("/posts/:id", deletePost);
