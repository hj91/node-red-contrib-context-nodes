/**

 Copyright 2024 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function ContextGetNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        // Function to retrieve a variable from context
        function getContextVariable(variable) {
            var scope = config.scope;
            if (scope === 'global') {
                return node.context().global.get(variable);
            } else if (scope === 'flow') {
                return node.context().flow.get(variable);
            }
            return null;
        }

        node.on('input', function(msg) {
            var variable = config.variable;
            var value = getContextVariable(variable);

            // Output the value of the variable
            msg.payload = value;
            node.send(msg);
        });
    }
    RED.nodes.registerType("context-get", ContextGetNode);
}

