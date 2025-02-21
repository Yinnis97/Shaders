#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load


void main() 
{
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 Mouse_st = u_mouse / u_resolution;

	//Lijnen Y-as
	float a = smoothstep(0.3,0.5,st.y) - smoothstep(0.5,0.7,st.y);
	float b = smoothstep(0.1,0.2,st.y) - smoothstep(0.2,0.3,st.y);
	float c = smoothstep(0.7,0.8,st.y) - smoothstep(0.8,0.9,st.y);

	//Lijnen X-as
	float d = smoothstep(0.3,0.5,st.x) - smoothstep(0.5,0.7,st.x);
	float e = smoothstep(0.1,0.2,st.x) - smoothstep(0.2,0.3,st.x);
	float f = smoothstep(0.7,0.8,st.x) - smoothstep(0.8,0.9,st.x);

	gl_FragColor = vec4(abs(sin(c+e+(u_time-0.1))),abs(sin(b+f+(u_time-0.1))),abs(sin(a+d+(u_time-0.1))),1.0); 
}
