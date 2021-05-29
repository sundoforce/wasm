function isWebAssemblySupport() {
  try {
      if (typeof WebAssembly === "object") {
	  	  const module = new WebAssembly.Module(new Uint8Array([0x00, 0x61,
		  	  0x73, 0x6D, 0x01, 0x00, 0x00, 0x00]));

			  	  if (module instanceof WebAssembly.Module) {
				  	      const moduleInstance = new WebAssembly.Instance(module);
						  		  return (moduleInstance instanceof WebAssembly.Instance);
								  		}
											}
											} catch (err) {}
											}

console.log((isWebAssemblySupport() ? "WebAssembly is supported" : "WebAssembly is not supported"))
