ubsApp.paymentConfig={
    "paymentScenario1":{
		"category":"Payment",
		
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion1}}",//question Key
			"amount":-1000,
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"payTitle":"{{payTitle}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"white",
			"background":"#000",
			"wildCard":"true",
			
			"negative":"true",
			"helpRequired":"true",
		}
	]

	},

	
	"paymentScenario2":{
		"category":"Payment",
		
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion2}}",//question Key
			"amount":-1000,
			"quizType":"luck",
			"negative":"true",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"payTitle":"{{payTitle}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"white",
			"background":"#000",
			"wildCard":"true",
			
		}
	]

	},
}