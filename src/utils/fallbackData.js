const fallbackDependency = [{
    Name: "shot",
    Relationship: "ROOT",
    children: [{
            Name: "I",
            Relationship: "nsubj",
            name: "I (NSUBJ)"
        },
        {
            Name: "elephant",
            Relationship: "dobj",
            children: [{
                Name: "the",
                Relationship: "det",
                name: "the (DET)"
            }],
            name: "elephant (DOBJ)"
        },
        {
            Name: "pjs",
            Relationship: "nmod",
            children: [{
                    Name: "in",
                    Relationship: "case",
                    name: "in (CASE)"
                },
                {
                    Name: "my",
                    Relationship: "nmod:poss",
                    name: "my (NMOD:POSS)"
                }
            ],
            name: "pjs (NMOD)"
        }
    ],
    name: "shot (ROOT)"
}];

const fallbackConstituency = [{
    name: "ROOT",
    children: [{
            name: "S",
            children: [{
                name: "NP",
                children: [{
                    name: "PRPI"
                }]
            }]
        },
        {
            name: "VP",
            children: [{
                    name: "VBDshot"
                },
                {
                    name: "NP",
                    children: [{
                            name: "DTthe"
                        },
                        {
                            name: "NNelephant"
                        }
                    ]
                },
                {
                    name: "PP",
                    children: [{
                        name: "INin"
                    }]
                },
                {
                    name: "NP",
                    children: [{
                            name: "PRPmy"
                        },
                        {
                            name: "NNSpjs"
                        }
                    ]
                }
            ]
        }
    ]
}];

export { fallbackDependency, fallbackConstituency };