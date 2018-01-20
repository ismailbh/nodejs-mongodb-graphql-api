import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLObject
} from 'graphql';

import GraphQLDate from 'graphql-date';

const pictureType = new GraphQLObjectType({
		name: 'picture',
  fields: {
    	large: {
	      type: GraphQLString,
	    },
	    medium: {
	      type: GraphQLString,
	    },
	    thumbnail: {
	      type: GraphQLString,
	    }
  }
});

const nameType = new GraphQLObjectType({
		name: 'name',
  fields: {
    	title: {
	      type: GraphQLString,
	    },
	    first: {
	      type: GraphQLString,
	    },
	    last: {
	      type: GraphQLString,
	    }
  }
});

const loginType = new GraphQLObjectType({
		name: 'login',
  fields: {
    	username: {
	      type: GraphQLString,
	    },
	    password: {
	      type: GraphQLString,
	    },
	    salt: {
	      type: GraphQLString,
	    },
			md5: {
	      type: GraphQLString,
	    },
			sha1: {
	      type: GraphQLString,
	    },
			sha256: {
	      type: GraphQLString,
	    }
  }
});

const locationType = new GraphQLObjectType({
		name: 'location',
  fields: {
    	street: {
	      type: GraphQLString,
	    },
	    city: {
	      type: GraphQLString,
	    },
	    state: {
	      type: GraphQLString,
	    },
			postcode: {
	      type: GraphQLString,
	    }
  }
});

export const compteType = new GraphQLObjectType({
	name: 'Compte',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
	    gender: {
		   type: GraphQLString
		},
	    name: {
	      type: nameType,
	    },
	    location: {
	      type: locationType,
	    },
	    login: {
	      type: loginType,
	    },
	    email: {
	      type: GraphQLString,
	    },
	    dob: {
	      type: GraphQLDate,
	    },
	    registered: {
	      type: GraphQLDate,
	    },
	    phone: {
	      type: GraphQLString,
	    },
	    cell: {
	      type: GraphQLString,
	    },
	    picture: {
	      type: pictureType,
	    },
	    nat: {
	      type: GraphQLString,
	    }
	})
});

export const compteInputType = new GraphQLInputObjectType({
	name: 'CompteInput',
	 fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
	    gender: {
		   type: GraphQLString
		},
	    name: {
	      type: nameType,
	    },
	    location: {
	      type: locationType,
	    },
	    login: {
	      type: loginType,
	    },
	    email: {
	      type: GraphQLString,
	    },
	    dob: {
	      type: GraphQLDate,
	    },
	    registered: {
	      type: GraphQLDate,
	    },
	    phone: {
	      type: GraphQLString,
	    },
	    cell: {
	      type: GraphQLString,
	    },
	    picture: {
	      type: pictureType,
	    },
	    nat: {
	      type: GraphQLString,
	    }
	})
})
