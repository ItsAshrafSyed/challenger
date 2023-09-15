export type Challenger = {
  "version": "0.1.0",
  "name": "challenger",
  "instructions": [
    {
      "name": "initCrux",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cruxManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cruxAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCruxAuth",
          "type": "u8"
        },
        {
          "name": "cruxFees",
          "type": {
            "defined": "CruxFees"
          }
        }
      ]
    },
    {
      "name": "updateCruxParams",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newCruxFees",
          "type": {
            "defined": "CruxFees"
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeCrux",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftPfpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "challengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "reputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        },
        {
          "name": "newChallengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "newReputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmissionModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "evaluateSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        },
        {
          "name": "submissionState",
          "type": {
            "defined": "SubmissionState"
          }
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "accountToClose",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crux",
            "type": "publicKey"
          },
          {
            "name": "challengeSeed",
            "type": "publicKey"
          },
          {
            "name": "challengePostedTs",
            "type": "u64"
          },
          {
            "name": "challengeExpiresTs",
            "type": "u64"
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "reputation",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "crux",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "cruxManager",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthority",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "cruxTreasury",
            "type": "publicKey"
          },
          {
            "name": "cruxFees",
            "type": {
              "defined": "CruxFees"
            }
          },
          {
            "name": "cruxCounts",
            "type": {
              "defined": "CruxCounts"
            }
          }
        ]
      }
    },
    {
      "name": "submission",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "submissionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "submissionState",
            "type": {
              "defined": "SubmissionState"
            }
          }
        ]
      }
    },
    {
      "name": "userProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileOwner",
            "type": "publicKey"
          },
          {
            "name": "crux",
            "type": "publicKey"
          },
          {
            "name": "profileCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "challengesSubmitted",
            "type": "u64"
          },
          {
            "name": "challengesCompleted",
            "type": "u64"
          },
          {
            "name": "reputationScore",
            "type": "u64"
          },
          {
            "name": "nftPfpTokenMint",
            "type": "publicKey"
          },
          {
            "name": "isModerator",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CruxCounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileCount",
            "type": "u64"
          },
          {
            "name": "challengeCount",
            "type": "u64"
          },
          {
            "name": "submissionCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CruxFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileFee",
            "type": "u64"
          },
          {
            "name": "submissionFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SubmissionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Completed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "Tags",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Client"
          },
          {
            "name": "Concept"
          },
          {
            "name": "Deploy"
          },
          {
            "name": "Gaming"
          },
          {
            "name": "Nfts"
          },
          {
            "name": "Sdk"
          },
          {
            "name": "Social"
          },
          {
            "name": "Staking"
          },
          {
            "name": "Video"
          },
          {
            "name": "Wallets"
          }
        ]
      }
    }
  ]
};

export const IDL: Challenger = {
  "version": "0.1.0",
  "name": "challenger",
  "instructions": [
    {
      "name": "initCrux",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cruxManager",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cruxAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCruxAuth",
          "type": "u8"
        },
        {
          "name": "cruxFees",
          "type": {
            "defined": "CruxFees"
          }
        }
      ]
    },
    {
      "name": "updateCruxParams",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newCruxFees",
          "type": {
            "defined": "CruxFees"
          }
        }
      ]
    },
    {
      "name": "payoutFromTreasury",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeCrux",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftPfpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteUserProfile",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cruxManager",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "tags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "contentDataUrl",
          "type": "string"
        },
        {
          "name": "challengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "reputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "newTags",
          "type": {
            "vec": {
              "defined": "Tags"
            }
          }
        },
        {
          "name": "newTitle",
          "type": "string"
        },
        {
          "name": "newContentDataUrl",
          "type": "string"
        },
        {
          "name": "newChallengeExpiresTs",
          "type": "u64"
        },
        {
          "name": "newReputation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteChallenge",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cruxTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpTreasury",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        }
      ]
    },
    {
      "name": "editSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newContentDataHash",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteSubmissionModerator",
      "accounts": [
        {
          "name": "crux",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        }
      ]
    },
    {
      "name": "evaluateSubmission",
      "accounts": [
        {
          "name": "crux",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "moderator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "moderatorProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "profileOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userProfile",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challengeSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "submission",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpModeratorProfile",
          "type": "u8"
        },
        {
          "name": "bumpUserProfile",
          "type": "u8"
        },
        {
          "name": "bumpChallenge",
          "type": "u8"
        },
        {
          "name": "bumpSubmission",
          "type": "u8"
        },
        {
          "name": "submissionState",
          "type": {
            "defined": "SubmissionState"
          }
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "accountToClose",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crux",
            "type": "publicKey"
          },
          {
            "name": "challengeSeed",
            "type": "publicKey"
          },
          {
            "name": "challengePostedTs",
            "type": "u64"
          },
          {
            "name": "challengeExpiresTs",
            "type": "u64"
          },
          {
            "name": "tags",
            "type": {
              "vec": {
                "defined": "Tags"
              }
            }
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "contentDataUrl",
            "type": "string"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "reputation",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "crux",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "cruxManager",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthority",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthoritySeed",
            "type": "publicKey"
          },
          {
            "name": "cruxAuthorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "cruxTreasury",
            "type": "publicKey"
          },
          {
            "name": "cruxFees",
            "type": {
              "defined": "CruxFees"
            }
          },
          {
            "name": "cruxCounts",
            "type": {
              "defined": "CruxCounts"
            }
          }
        ]
      }
    },
    {
      "name": "submission",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "userProfile",
            "type": "publicKey"
          },
          {
            "name": "submissionPostedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "contentDataHash",
            "type": "publicKey"
          },
          {
            "name": "submissionState",
            "type": {
              "defined": "SubmissionState"
            }
          }
        ]
      }
    },
    {
      "name": "userProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileOwner",
            "type": "publicKey"
          },
          {
            "name": "crux",
            "type": "publicKey"
          },
          {
            "name": "profileCreatedTs",
            "type": "u64"
          },
          {
            "name": "mostRecentEngagementTs",
            "type": "u64"
          },
          {
            "name": "challengesSubmitted",
            "type": "u64"
          },
          {
            "name": "challengesCompleted",
            "type": "u64"
          },
          {
            "name": "reputationScore",
            "type": "u64"
          },
          {
            "name": "nftPfpTokenMint",
            "type": "publicKey"
          },
          {
            "name": "isModerator",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CruxCounts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileCount",
            "type": "u64"
          },
          {
            "name": "challengeCount",
            "type": "u64"
          },
          {
            "name": "submissionCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CruxFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profileFee",
            "type": "u64"
          },
          {
            "name": "submissionFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SubmissionState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Completed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Pending"
          }
        ]
      }
    },
    {
      "name": "Tags",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Client"
          },
          {
            "name": "Concept"
          },
          {
            "name": "Deploy"
          },
          {
            "name": "Gaming"
          },
          {
            "name": "Nfts"
          },
          {
            "name": "Sdk"
          },
          {
            "name": "Social"
          },
          {
            "name": "Staking"
          },
          {
            "name": "Video"
          },
          {
            "name": "Wallets"
          }
        ]
      }
    }
  ]
};
