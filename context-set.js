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
    function ContextSetNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        // Function to set a variable in context
        function setContextVariable(variable, value) {
            var scope = config.scope;
            if (scope === 'global') {
                node.context().global.set(variable, value);
            } else if (scope === 'flow') {
                node.context().flow.set(variable, value);
            }
        }

        node.on('input', function(msg) {
            var variable = config.variable;
            var value = config.value;

            // Set the variable in context
            setContextVariable(variable, value);

            // Pass the message along
            node.send(msg);
        });
    }
    RED.nodes.registerType("context-set", ContextSetNode);
}

